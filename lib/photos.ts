
// Demo artwork, drawn by `npm run photos`. To use a real photo, save it over
// the same path at the same size and rewrite the alt text.
export type PhotoSlot = {
  /** Path under /public, including the leading slash. */
  src: string;
  /** Rendered alt text. Written for screen readers, not for keywords. */
  alt: string;
  width: number;
  height: number;
};

export const photos = {
  patioSlabs: {
    src: "/images/patio-slabs.jpg",
    alt: "Abstract artwork of paving slabs set in a grid, drawn in the Pure Oasis palette.",
    width: 1600,
    height: 1200,
  },
  patioSlabsPortrait: {
    src: "/images/patio-slabs-portrait.jpg",
    alt: "Abstract artwork of paving slabs receding in perspective.",
    width: 1400,
    height: 1750,
  },
  frontEntryStone: {
    src: "/images/front-entry-stone.jpg",
    alt: "Abstract artwork of a paved entry laid out in a grid.",
    width: 1600,
    height: 1200,
  },
  frontLawnStriped: {
    src: "/images/front-lawn-striped.jpg",
    alt: "Abstract artwork of mown bands running across a lawn.",
    width: 1600,
    height: 1200,
  },
  sideYardBefore: {
    src: "/images/side-yard-before.jpg",
    alt: "Abstract artwork of scattered overgrown foliage.",
    width: 1600,
    height: 1200,
  },
  sideYardAfter: {
    src: "/images/side-yard-after.jpg",
    alt: "Abstract artwork of laid paving in a clean grid.",
    width: 1600,
    height: 1200,
  },
  serviceDesign: {
    src: "/images/service-design.jpg",
    alt: "Abstract artwork of topographic contour lines.",
    width: 1200,
    height: 900,
  },
  serviceHardscape: {
    src: "/images/service-hardscape.jpg",
    alt: "Abstract artwork of paving slabs and open joints.",
    width: 1200,
    height: 900,
  },
  serviceLawn: {
    src: "/images/service-lawn.jpg",
    alt: "Abstract artwork of cut stripes across turf.",
    width: 1200,
    height: 900,
  },
  serviceIrrigation: {
    src: "/images/service-irrigation.jpg",
    alt: "Abstract artwork of concentric ripples spreading through water.",
    width: 1200,
    height: 900,
  },
  serviceGarden: {
    src: "/images/service-garden.jpg",
    alt: "Abstract artwork of layered leaf forms.",
    width: 1200,
    height: 900,
  },

  backyardCover: {
    src: "/images/project-backyard.jpg",
    alt: "Abstract artwork of layered ground stepping back in bands.",
    width: 2400,
    height: 1080,
  },
  frontEntryCover: {
    src: "/images/project-front-entry.jpg",
    alt: "Abstract artwork of layered ground in horizontal bands.",
    width: 2400,
    height: 1080,
  },
  sideYardDetail: {
    src: "/images/side-yard-detail.jpg",
    alt: "Abstract artwork of a paving joint in close detail.",
    width: 1200,
    height: 900,
  },
  backyardDetail: {
    src: "/images/project-backyard-detail.jpg",
    alt: "Abstract artwork of paving edges meeting.",
    width: 1200,
    height: 900,
  },
  frontEntryDetail: {
    src: "/images/project-front-entry-detail.jpg",
    alt: "Abstract artwork of ripples radiating from a point.",
    width: 1200,
    height: 900,
  },

  aboutLead: {
    src: "/images/about-crew.jpg",
    alt: "Abstract artwork of layered terrain.",
    width: 1600,
    height: 1200,
  },
  aboutDetail: {
    src: "/images/about-detail.jpg",
    alt: "Abstract artwork of overlapping leaves.",
    width: 900,
    height: 1200,
  },
  aboutYard: {
    src: "/images/about-yard.jpg",
    alt: "Abstract artwork of stacked rectangular forms.",
    width: 1200,
    height: 900,
  },

  teamLead: {
    src: "/images/team-lead.jpg",
    alt: "Abstract soft-focus artwork in the Pure Oasis palette.",
    width: 900,
    height: 1100,
  },
  teamBuild: {
    src: "/images/team-build.jpg",
    alt: "Abstract soft-focus artwork in the Pure Oasis palette.",
    width: 900,
    height: 1100,
  },

  postFreezeThaw: {
    src: "/images/post-freeze-thaw.jpg",
    alt: "Abstract artwork of paving slabs and joint lines.",
    width: 1200,
    height: 800,
  },
  postLawn: {
    src: "/images/post-lawn.jpg",
    alt: "Abstract artwork of mown bands across grass.",
    width: 1200,
    height: 800,
  },
  postBudget: {
    src: "/images/post-budget.jpg",
    alt: "Abstract artwork of contour lines, suggesting a site plan.",
    width: 1200,
    height: 800,
  },

  ctaLead: {
    src: "/images/cta-lead.jpg",
    alt: "Abstract artwork of layered ground at dusk.",
    width: 1200,
    height: 900,
  },
  ctaSecond: {
    src: "/images/cta-second.jpg",
    alt: "Abstract artwork of leaf forms clustered together.",
    width: 800,
    height: 1000,
  },
  ctaThird: {
    src: "/images/cta-third.jpg",
    alt: "Abstract artwork of concentric rings.",
    width: 800,
    height: 800,
  },

  contactSide: {
    src: "/images/consult.jpg",
    alt: "Abstract soft-focus artwork in the Pure Oasis palette.",
    width: 1200,
    height: 1500,
  },
} satisfies Record<string, PhotoSlot>;

export type PhotoKey = keyof typeof photos;
