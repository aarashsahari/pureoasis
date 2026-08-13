/**
 * Fills every empty photo slot with a licensed stock stand-in.
 *
 *   npm run photos:fetch
 *
 * Source is Openverse, filtered to CC0 and public domain marked images cleared
 * for commercial use, so nothing here carries an attribution obligation. A
 * credits file is still written for the record.
 *
 * Rules this follows:
 *   - A file that already exists is never overwritten. Real job photography
 *     always wins over a stand-in.
 *   - Every download is verified as a real image and re-encoded through sharp
 *     to the exact dimensions the manifest declares, cropped to fill.
 *   - A tiny blurred version of each image is written to lib/photo-blur.json
 *     so next/image can fade in from a blur instead of popping.
 *
 * Flags:
 *   --force   replace stand-ins that are already there
 *   --only=a,b   restrict to named slots
 *   --dry-run    resolve and report, write nothing
 *
 * Env:
 *   OPENVERSE_API   override the API base, used by the test harness
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const API = process.env.OPENVERSE_API ?? "https://api.openverse.org/v1/images/";
const IMAGES_DIR = join(ROOT, "public/images");
const BLUR_FILE = join(ROOT, "lib/photo-blur.json");

const args = process.argv.slice(2);
const force = args.includes("--force");
const dryRun = args.includes("--dry-run");
const onlyArg = args.find((a) => a.startsWith("--only="));
const only = onlyArg ? onlyArg.slice("--only=".length).split(",").map((s) => s.trim()) : null;

/** Parses the manifest without importing TypeScript. */
function readManifest() {
  const source = readFileSync(join(ROOT, "lib/photos.ts"), "utf8");
  const pattern =
    /(\w+): \{\s*src: "([^"]+)",\s*alt:\s*\n?\s*"([^"]+)",\s*width: (\d+),\s*height: (\d+),\s*brief:\s*\n?\s*"([^"]+)",\s*stockQuery: "([^"]+)",/g;
  return [...source.matchAll(pattern)].map((m) => ({
    key: m[1],
    src: m[2],
    alt: m[3],
    width: Number(m[4]),
    height: Number(m[5]),
    query: m[7],
  }));
}

async function search(query) {
  const url = new URL(API);
  url.searchParams.set("q", query);
  url.searchParams.set("license", "cc0,pdm");
  url.searchParams.set("license_type", "commercial");
  url.searchParams.set("extension", "jpg");
  url.searchParams.set("size", "large");
  url.searchParams.set("mature", "false");
  url.searchParams.set("page_size", "12");

  const response = await fetch(url, {
    headers: { "User-Agent": "pureoasis-site/1.0 (stock stand-in fetch)" },
  });
  if (!response.ok) throw new Error(`search failed with ${response.status}`);
  const body = await response.json();
  return body.results ?? [];
}

async function download(url) {
  const response = await fetch(url, {
    headers: { "User-Agent": "pureoasis-site/1.0 (stock stand-in fetch)" },
    redirect: "follow",
  });
  if (!response.ok) throw new Error(`download failed with ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.length < 5000) throw new Error(`suspiciously small (${buffer.length} bytes)`);
  return buffer;
}

/** Re-encodes to the manifest size, cropped to fill, and returns a blur seed. */
async function toExactSize(buffer, slot) {
  const image = sharp(buffer, { failOn: "error" });
  const meta = await image.metadata();
  if (!meta.width || !meta.height) throw new Error("not a decodable image");
  if (meta.width < slot.width / 2) throw new Error(`too small (${meta.width}px wide)`);

  const resized = await sharp(buffer)
    .resize(slot.width, slot.height, { fit: "cover", position: "attention" })
    .jpeg({ quality: 78, mozjpeg: true })
    .toBuffer();

  const blur = await sharp(buffer)
    .resize(16, Math.max(1, Math.round((16 * slot.height) / slot.width)), { fit: "cover" })
    .webp({ quality: 40 })
    .toBuffer();

  return { resized, blurDataURL: `data:image/webp;base64,${blur.toString("base64")}` };
}

const manifest = readManifest().filter((slot) => (only ? only.includes(slot.key) : true));
if (manifest.length === 0) {
  console.error("No slots matched. Check --only, or that lib/photos.ts still carries stockQuery.");
  process.exit(1);
}

mkdirSync(IMAGES_DIR, { recursive: true });
const blurMap = existsSync(BLUR_FILE) ? JSON.parse(readFileSync(BLUR_FILE, "utf8")) : {};

const filled = [];
const skipped = [];
const failed = [];
const credits = [];

for (const slot of manifest) {
  const target = join(ROOT, "public", slot.src);

  if (existsSync(target) && !force) {
    skipped.push(slot.key);
    continue;
  }

  try {
    const results = await search(slot.query);
    if (results.length === 0) throw new Error("no results for this query");

    let done = false;
    let lastError = null;

    for (const candidate of results.slice(0, 5)) {
      try {
        const buffer = await download(candidate.url);
        const { resized, blurDataURL } = await toExactSize(buffer, slot);

        if (!dryRun) {
          writeFileSync(target, resized);
          blurMap[slot.key] = blurDataURL;
        }

        credits.push({
          key: slot.key,
          file: slot.src,
          title: candidate.title ?? "Untitled",
          creator: candidate.creator ?? "Unknown",
          license: (candidate.license ?? "cc0").toUpperCase(),
          source: candidate.foreign_landing_url ?? candidate.url,
        });
        filled.push(`${slot.key} (${Math.round(resized.length / 1024)} KB)`);
        done = true;
        break;
      } catch (error) {
        lastError = error;
      }
    }

    if (!done) throw lastError ?? new Error("no usable candidate");
  } catch (error) {
    failed.push(`${slot.key}: ${error.message}`);
  }
}

if (!dryRun) {
  writeFileSync(BLUR_FILE, `${JSON.stringify(blurMap, null, 2)}\n`);

  const lines = [
    "# Stock stand-in credits",
    "",
    "These images are temporary stand-ins pulled from Openverse under CC0 or the",
    "Public Domain Mark and cleared for commercial use, so no attribution is",
    "legally required. They are listed here for the record, and so they can be",
    "found and replaced with real Pure Oasis job photography.",
    "",
    "Delete a file from public/images and run `npm run photos:fetch` to replace it,",
    "or drop your own photograph in under the same filename and it takes over.",
    "",
  ];
  for (const credit of credits) {
    lines.push(
      `## \`${credit.file.split("/").pop()}\``,
      "",
      `- Slot: ${credit.key}`,
      `- Title: ${credit.title}`,
      `- Creator: ${credit.creator}`,
      `- Licence: ${credit.license}`,
      `- Source: ${credit.source}`,
      ""
    );
  }
  if (credits.length > 0) writeFileSync(join(IMAGES_DIR, "CREDITS.md"), lines.join("\n"));
}

console.log(`\nFilled   ${filled.length}`);
for (const line of filled) console.log(`  ${line}`);
console.log(`\nSkipped  ${skipped.length} (already present, pass --force to replace)`);
if (skipped.length > 0) console.log(`  ${skipped.join(", ")}`);
if (failed.length > 0) {
  console.log(`\nFailed   ${failed.length}`);
  for (const line of failed) console.log(`  ${line}`);
}
console.log(
  dryRun
    ? "\nDry run, nothing written."
    : `\nWrote ${filled.length} files, blur seeds to lib/photo-blur.json, credits to public/images/CREDITS.md.`
);

if (failed.length > 0 && filled.length === 0) process.exit(1);
