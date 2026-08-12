/**
 * Photo manifest.
 *
 * Every photographic slot on the site is declared here once. The `<Photo>`
 * component checks at render time whether the file exists in /public and
 * either renders the real photograph or a labelled reservation block of the
 * exact same aspect ratio, so nothing shifts when the real files land.
 *
 * To go live: drop a file at `public/<src>` for each slot below. No code
 * change is needed. `brief` is the art direction for the shoot.
 */

export type PhotoSlot = {
  /** Path under /public, including the leading slash. */
  src: string;
  /** Rendered alt text. Written for screen readers, not for keywords. */
  alt: string;
  width: number;
  height: number;
  /** Art direction for whoever shoots or sources the image. */
  brief: string;
};

export const photos = {
  heroMain: {
    src: "/images/hero-terrace.jpg",
    alt: "A limestone terrace and planted border at dusk behind a Burlington home, lit by low path lighting.",
    width: 1400,
    height: 1750,
    brief:
      "Hero. Portrait crop of a finished backyard at blue hour. Terrace in the foreground, planting and a lit tree behind. No people, no furniture clutter.",
  },
  serviceDesign: {
    src: "/images/service-design.jpg",
    alt: "A landscape plan on a work table beside stone and paver samples.",
    width: 1200,
    height: 900,
    brief:
      "Design service tile. Overhead of a planting plan with material samples. Warm task light, tight crop, no branded product labels.",
  },
  serviceStone: {
    src: "/images/service-stone.jpg",
    alt: "A crew setting a full-depth flagstone step onto a compacted base.",
    width: 1000,
    height: 1250,
    brief:
      "Stonework tile. Portrait crop, hands and a stone in motion, granular base visible. Real site, not a showroom.",
  },
  serviceWater: {
    src: "/images/service-water.jpg",
    alt: "A rectangular pool with a stone coping edge and a planted screen behind it.",
    width: 1600,
    height: 900,
    brief:
      "Water tile. Wide crop of a pool or water feature edge at the coping line. Calm surface, evening light.",
  },
  projectLead: {
    src: "/images/project-ancaster.jpg",
    alt: "A wide view of a rebuilt Ancaster backyard with a terrace, a fire table and a sloped lawn.",
    width: 2400,
    height: 1080,
    brief:
      "Featured project. Ultra wide establishing shot of the whole yard, shot from the house looking out, late afternoon.",
  },
  projectDetail: {
    src: "/images/project-ancaster-detail.jpg",
    alt: "A close view of the terrace joint line where cut stone meets a planted bed.",
    width: 1200,
    height: 900,
    brief:
      "Featured project detail. Tight crop on a joint, edge restraint or riser. This is the shot that proves the workmanship.",
  },
  contactSide: {
    src: "/images/consult.jpg",
    alt: "A designer walking a client through a rear yard with a tape measure and a site sketch.",
    width: 1200,
    height: 1500,
    brief:
      "Consult section. Portrait crop of the first site visit. Candid, two people, sketchbook or tape in frame.",
  },
} satisfies Record<string, PhotoSlot>;

export type PhotoKey = keyof typeof photos;
