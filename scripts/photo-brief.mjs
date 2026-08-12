/**
 * Regenerates public/images/README.md from the photo manifest.
 *
 * Run with `npm run photos` after adding or changing a slot in lib/photos.ts,
 * so the shot list handed to a photographer never drifts from the code.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const source = readFileSync(join(root, "lib/photos.ts"), "utf8");

const entryPattern =
  /(\w+): \{\s*src: "([^"]+)",\s*alt:\s*\n?\s*"([^"]+)",\s*width: (\d+),\s*height: (\d+),\s*brief:\s*\n?\s*"([^"]+)",(\s*have: true,)?/g;

const entries = [...source.matchAll(entryPattern)];
if (entries.length === 0) {
  console.error("No photo slots found. Has the shape of lib/photos.ts changed?");
  process.exit(1);
}

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const have = entries.filter((entry) => Boolean(entry[7]));
const needed = entries.filter((entry) => !entry[7]);

const lines = [
  "# Photography",
  "",
  `${entries.length} photographic slots. Drop a file at each path below and it renders`,
  "automatically: `components/ui/photo.tsx` checks for the file at render time and",
  "otherwise shows a reservation block of the same aspect ratio, so nothing on the",
  "page shifts when the real images land.",
  "",
  "Export at the pixel size given or larger at the same ratio. JPEG, quality 80,",
  "sRGB. Keep the filenames exactly as listed.",
  "",
  "Alt text lives in `lib/photos.ts`. Update it if the photograph you supply shows",
  "something different from the brief.",
  "",
  "This file is generated. Run `npm run photos` after editing the manifest.",
  "",
];

function section(title, note, rows) {
  lines.push(`# ${title}`, "", note, "");
  for (const [, , src, , width, height, brief] of rows) {
    const w = Number(width);
    const h = Number(height);
    const divisor = gcd(w, h);
    lines.push(
      `## \`${src.split("/").pop()}\``,
      "",
      `- Path: \`public${src}\``,
      `- Size: ${w} x ${h}, ratio ${w / divisor}:${h / divisor}`,
      `- Brief: ${brief}`,
      ""
    );
  }
}

section(
  `Photographs you already have (${have.length})`,
  "These exist. They need exporting at the size below, under exactly these filenames.",
  have
);

section(
  `Still to shoot (${needed.length})`,
  "Nothing here blocks launch. Each slot shows a labelled reservation of the right shape until the file arrives, so these can be filled in over a season of normal job photography.",
  needed
);

writeFileSync(join(root, "public/images/README.md"), `${lines.join("\n")}`);
console.log(`Wrote public/images/README.md for ${entries.length} slots.`);
