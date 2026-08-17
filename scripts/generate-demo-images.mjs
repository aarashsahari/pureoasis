// Draws the demo artwork for every photo slot, seeded from the slot name so
// output is stable. Existing files are left alone unless --force.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const IMAGES_DIR = join(ROOT, "public/images");
const BLUR_FILE = join(ROOT, "lib/photo-blur.json");
const force = process.argv.includes("--force");

/* Palette, pulled from the same values as app/globals.css. */
const INK = "#0c110e";
const SPRUCE = "#16241c";
const MOSS = "#24422f";
const SAGE = "#4b7a5c";
const VERDIGRIS = "#6cc294";
const BONE = "#e9e6dd";
const STONE = "#c9c6bb";

/** Deterministic PRNG so a slot always renders identically. */
function rng(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const between = (r, min, max) => min + r() * (max - min);

/** Common wrapper: a base wash, the artwork, then a soft vignette on top. */
function frame(w, h, from, to, body, seed) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="wash" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0" stop-color="${from}"/>
      <stop offset="1" stop-color="${to}"/>
    </linearGradient>
    <radialGradient id="vig" cx="0.5" cy="0.42" r="0.78">
      <stop offset="0.55" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.32"/>
    </radialGradient>
    <linearGradient id="light" x1="0" y1="0" x2="1" y2="0.6">
      <stop offset="0" stop-color="${BONE}" stop-opacity="0.16"/>
      <stop offset="0.5" stop-color="${BONE}" stop-opacity="0.03"/>
      <stop offset="1" stop-color="${INK}" stop-opacity="0.12"/>
    </linearGradient>
    <filter id="soften"><feGaussianBlur stdDeviation="${Math.max(1, w / 500)}"/></filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#wash)"/>
  ${body}
  <rect width="${w}" height="${h}" fill="url(#light)"/>
  <rect width="${w}" height="${h}" fill="url(#vig)"/>
  <!-- seed:${seed} -->
</svg>`;
}

/* Slabs in a grid with open joints, drawn in perspective. Hardscape.
   Scale, angle and stone tone all vary by seed, so the nine slots that use
   this family read as nine different surfaces rather than one repeated. */
function paving(w, h, seed) {
  const r = rng(seed);
  const large = r() > 0.45;
  const cols = large ? Math.round(between(r, 3, 5)) : Math.round(between(r, 7, 10));
  const rows = large ? Math.round(between(r, 3, 5)) : Math.round(between(r, 7, 11));
  const pale = r() > 0.45;
  const angle = between(r, -16, 6);
  const joint = w * (large ? 0.014 : 0.008);
  const cw = (w * 1.5 - joint * cols) / cols;
  const ch = (h * 1.15 - joint * rows) / rows;
  let out = "";
  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      const depth = 1 - y / (rows + 2);
      const base = pale ? 186 : 96;
      const tone = base + Math.round(between(r, -20, 20) + depth * (pale ? 28 : 34));
      const px = x * (cw + joint) - w * 0.24 + y * joint * 0.6;
      const py = y * (ch + joint) - h * 0.07;
      out += `<rect x="${px.toFixed(1)}" y="${py.toFixed(1)}" width="${cw.toFixed(1)}" height="${ch.toFixed(
        1
      )}" rx="2" fill="rgb(${tone},${tone - 6},${tone - 16})" opacity="${(0.8 + depth * 0.14).toFixed(2)}"/>`;
    }
  }
  return frame(
    w,
    h,
    pale ? MOSS : SPRUCE,
    INK,
    `<g transform="rotate(${angle.toFixed(1)} ${w / 2} ${h / 2})">${out}</g>`,
    seed
  );
}

/* Mown bands running across the frame. Lawn care. */
function stripes(w, h, seed) {
  const r = rng(seed);
  const bands = Math.round(between(r, 7, 11));
  const bh = (h * 1.8) / bands;
  let out = "";
  for (let i = 0; i < bands; i += 1) {
    const light = i % 2 === 0;
    out += `<rect x="${-w * 0.3}" y="${(i * bh - h * 0.4).toFixed(1)}" width="${w * 1.6}" height="${bh.toFixed(
      1
    )}" fill="${light ? SAGE : MOSS}" opacity="${light ? 0.9 : 0.75}"/>`;
  }
  return frame(w, h, SAGE, MOSS, `<g transform="rotate(-14 ${w / 2} ${h / 2})">${out}</g>`, seed);
}

/* Overlapping leaf forms, clustered rather than scattered. Planting. */
function foliage(w, h, seed) {
  const r = rng(seed);
  const clusters = Math.round(between(r, 3, 5));
  let out = "";
  for (let c = 0; c < clusters; c += 1) {
    const ox = between(r, 0.1, 0.9) * w;
    const oy = between(r, 0.1, 0.9) * h;
    const leaves = Math.round(between(r, 7, 12));
    for (let i = 0; i < leaves; i += 1) {
      const len = between(r, w * 0.07, w * 0.2);
      const wide = len * between(r, 0.3, 0.46);
      const rot = between(r, 0, 360);
      const x = ox + between(r, -1, 1) * w * 0.11;
      const y = oy + between(r, -1, 1) * h * 0.13;
      const light = r() > 0.5;
      // A leaf is two quadratic curves meeting at the tip and the stem.
      const path = `M0,0 Q${(len * 0.5).toFixed(1)},${(-wide).toFixed(1)} ${len.toFixed(1)},0 Q${(
        len * 0.5
      ).toFixed(1)},${wide.toFixed(1)} 0,0 Z`;
      out += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot.toFixed(1)})">
        <path d="${path}" fill="${light ? VERDIGRIS : BONE}" opacity="${between(r, 0.14, 0.4).toFixed(2)}"/>
        <path d="M0,0 L${len.toFixed(1)},0" stroke="${INK}" stroke-width="${(w * 0.0016).toFixed(
        2
      )}" opacity="0.16"/>
      </g>`;
    }
  }
  return frame(w, h, MOSS, SPRUCE, out, seed);
}

/* Topographic contours. Design and planning. */
function contour(w, h, seed) {
  const r = rng(seed);
  const lines = Math.round(between(r, 9, 14));
  const cx = between(r, 0.3, 0.7) * w;
  const cy = between(r, 0.35, 0.65) * h;
  let out = "";
  for (let i = lines; i > 0; i -= 1) {
    const scale = i / lines;
    const rx = w * 0.62 * scale;
    const ry = h * 0.55 * scale * between(r, 0.85, 1.15);
    out += `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(
      1
    )}" fill="none" stroke="${i % 3 === 0 ? VERDIGRIS : BONE}" stroke-width="${(w * 0.0032).toFixed(
      2
    )}" opacity="${(0.22 + scale * 0.4).toFixed(2)}"/>`;
  }
  return frame(w, h, SPRUCE, INK, out, seed);
}

/* Concentric ripples. Irrigation and water. */
function ripple(w, h, seed) {
  const r = rng(seed);
  const cx = between(r, 0.35, 0.65) * w;
  const cy = between(r, 0.45, 0.7) * h;
  const rings = Math.round(between(r, 10, 15));
  let out = "";
  for (let i = rings; i > 0; i -= 1) {
    const rad = (i / rings) * w * 0.75;
    out += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${rad.toFixed(
      1
    )}" fill="none" stroke="${BONE}" stroke-width="${(w * 0.003).toFixed(2)}" opacity="${(
      0.05 +
      (1 - i / rings) * 0.3
    ).toFixed(2)}"/>`;
  }
  return frame(w, h, SAGE, SPRUCE, out, seed);
}

/* Layered organic bands, like terraces stepping back. Wide establishing frames. */
function horizon(w, h, seed) {
  const r = rng(seed);
  const layers = Math.round(between(r, 4, 6));
  const tones = [SPRUCE, MOSS, SAGE, VERDIGRIS, STONE];
  let out = "";
  for (let i = 0; i < layers; i += 1) {
    const base = h * (0.32 + (i / layers) * 0.62);
    const amp = h * between(r, 0.04, 0.1);
    const pts = [];
    const steps = 8;
    for (let s = 0; s <= steps; s += 1) {
      const x = (s / steps) * w;
      const y = base + Math.sin(s * between(r, 0.6, 1.2) + i) * amp;
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    out += `<polygon points="${pts.join(" ")} ${w},${h} 0,${h}" fill="${
      tones[i % tones.length]
    }" opacity="${(0.55 + i * 0.09).toFixed(2)}"/>`;
  }
  return frame(w, h, SPRUCE, MOSS, out, seed);
}

/* A quiet wash with a single soft form. Portraits and supporting frames. */
function soft(w, h, seed) {
  const r = rng(seed);
  const cx = between(r, 0.3, 0.7) * w;
  const cy = between(r, 0.3, 0.6) * h;
  const rad = between(r, 0.3, 0.5) * w;
  const body = `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${rad.toFixed(
    1
  )}" fill="${VERDIGRIS}" opacity="0.2" filter="url(#soften)"/>
  <circle cx="${(cx + rad * 0.4).toFixed(1)}" cy="${(cy + rad * 0.3).toFixed(1)}" r="${(rad * 0.6).toFixed(
    1
  )}" fill="${BONE}" opacity="0.12" filter="url(#soften)"/>`;
  return frame(w, h, MOSS, SPRUCE, body, seed);
}

/* Which family each slot draws from. */
const FAMILY = {
  patioSlabs: paving,
  patioSlabsPortrait: horizon,
  frontEntryStone: contour,
  frontLawnStriped: stripes,
  sideYardBefore: foliage,
  sideYardAfter: paving,
  serviceDesign: contour,
  serviceHardscape: paving,
  serviceLawn: stripes,
  serviceIrrigation: ripple,
  serviceGarden: foliage,
  backyardCover: horizon,
  frontEntryCover: horizon,
  sideYardDetail: paving,
  backyardDetail: paving,
  frontEntryDetail: ripple,
  aboutLead: horizon,
  aboutDetail: foliage,
  aboutYard: stripes,
  teamLead: soft,
  teamBuild: soft,
  postFreezeThaw: paving,
  postLawn: stripes,
  postBudget: contour,
  ctaLead: horizon,
  ctaSecond: foliage,
  ctaThird: ripple,
  contactSide: soft,
};

function readManifest() {
  const source = readFileSync(join(ROOT, "lib/photos.ts"), "utf8");
  const pattern = /(\w+): \{\s*src: "([^"]+)",\s*alt:\s*\n?\s*"([^"]+)",\s*width: (\d+),\s*height: (\d+),/g;
  return [...source.matchAll(pattern)].map((m) => ({
    key: m[1],
    src: m[2],
    width: Number(m[4]),
    height: Number(m[5]),
  }));
}

const manifest = readManifest();
mkdirSync(IMAGES_DIR, { recursive: true });
const blurMap = {};
let written = 0;
let kept = 0;

for (const slot of manifest) {
  const target = join(ROOT, "public", slot.src);
  const draw = FAMILY[slot.key] ?? soft;

  if (existsSync(target) && !force) {
    kept += 1;
    // Still needs a blur seed, taken from whatever is actually on disk.
    const blur = await sharp(target).resize(16).webp({ quality: 40 }).toBuffer();
    blurMap[slot.key] = `data:image/webp;base64,${blur.toString("base64")}`;
    continue;
  }

  const svg = Buffer.from(draw(slot.width, slot.height, slot.key));
  const jpeg = await sharp(svg, { density: 144 })
    .resize(slot.width, slot.height, { fit: "cover" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  writeFileSync(target, jpeg);

  const blur = await sharp(jpeg).resize(16).webp({ quality: 40 }).toBuffer();
  blurMap[slot.key] = `data:image/webp;base64,${blur.toString("base64")}`;
  written += 1;
}

writeFileSync(BLUR_FILE, `${JSON.stringify(blurMap, null, 2)}\n`);
console.log(`Generated ${written} images, kept ${kept} existing, wrote ${manifest.length} blur seeds.`);
