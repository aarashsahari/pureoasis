/**
 * Photo manifest.
 *
 * Every photographic slot on the site is declared here once. The `<Photo>`
 * component checks at render time whether the file exists in /public and
 * either renders the real photograph or a labelled reservation block of the
 * exact same aspect ratio, so nothing shifts when the real files land.
 *
 * `have: true` marks a slot where Pure Oasis already has the photograph and it
 * only needs exporting to the filename below. Everything else still needs
 * shooting or sourcing.
 *
 * Run `npm run photos` to regenerate `public/images/README.md` from this file.
 */

export type PhotoSlot = {
  /** Path under /public, including the leading slash. */
  src: string;
  /** Rendered alt text. Written for screen readers, not for keywords. */
  alt: string;
  width: number;
  height: number;
  /** Art direction, or the crop instruction for a photograph that exists. */
  brief: string;
  /** True when the photograph exists and only needs exporting. */
  have?: boolean;
};

export const photos = {
  // ---------------------------------------------------------------------
  // Photographs Pure Oasis already has.
  // ---------------------------------------------------------------------
  patioSlabs: {
    src: "/images/patio-slabs.jpg",
    alt: "Large format concrete slabs set with black stone joints, meeting a strip of fresh sod along a cedar fence.",
    width: 1600,
    height: 1200,
    brief:
      "The slab patio with black stone joints and new sod against the cedar fence. Export at 1600px on the long edge, no crop needed.",
    have: true,
  },
  patioSlabsPortrait: {
    src: "/images/patio-slabs-portrait.jpg",
    alt: "A slab patio with black stone joints running back towards a cedar fence.",
    width: 1400,
    height: 1750,
    brief:
      "Same slab patio photograph, cropped to a 4:5 portrait for the home page hero. Keep the run of slabs and the sod edge in frame, crop from the sides.",
    have: true,
  },
  frontEntryStone: {
    src: "/images/front-entry-stone.jpg",
    alt: "A stamped concrete walkway with a black river rock inlay running beside a mulched bed of hostas and young shrubs.",
    width: 1600,
    height: 1200,
    brief:
      "The overhead of the stamped concrete entry with the black river rock inlay and the mulched bed. Export as shot.",
    have: true,
  },
  frontLawnStriped: {
    src: "/images/front-lawn-striped.jpg",
    alt: "A freshly cut front lawn with mower stripes, edged mulch beds of hostas and flowering shrubs, and a stamped concrete walkway.",
    width: 1600,
    height: 1200,
    brief: "The striped front lawn with the mulched beds and the walkway. Export as shot.",
    have: true,
  },
  sideYardBefore: {
    src: "/images/side-yard-before.jpg",
    alt: "A narrow side yard before work, with patchy grass, timber raised beds and loose gravel against the fence.",
    width: 1600,
    height: 1200,
    brief:
      "Before frame of the side yard. Keep it exactly as shot, including the raised beds and the bare patches. Do not colour correct it to look better than it was.",
    have: true,
  },
  sideYardAfter: {
    src: "/images/side-yard-after.jpg",
    alt: "The same side yard after work, with square stepping stones set in black stone and new sod laid up to the garage.",
    width: 1600,
    height: 1200,
    brief:
      "After frame of the side yard, shot from the matching end so the pair reads as the same place.",
    have: true,
  },

  // ---------------------------------------------------------------------
  // Still needed.
  // ---------------------------------------------------------------------
  serviceDesign: {
    src: "/images/service-design.jpg",
    alt: "A landscape plan on a work table beside stone and mulch samples.",
    width: 1200,
    height: 900,
    brief:
      "Design service. Overhead of a plan with material samples. Warm task light, tight crop, no branded product labels.",
  },
  serviceHardscape: {
    src: "/images/service-hardscape.jpg",
    alt: "A crew setting a slab onto a compacted base.",
    width: 1200,
    height: 900,
    brief:
      "Hardscape service. Hands and a slab or stone in motion, granular base visible. Take this on any build day, it is the most valuable photo on the site.",
  },
  serviceLawn: {
    src: "/images/service-lawn.jpg",
    alt: "A mower part way across a lawn, leaving a cut stripe behind it.",
    width: 1200,
    height: 900,
    brief:
      "Lawn care service. Mid cut, stripe visible behind the machine. Shoot low so the stripe reads.",
  },
  serviceIrrigation: {
    src: "/images/service-irrigation.jpg",
    alt: "A pop up irrigation head running at the edge of a bed.",
    width: 1200,
    height: 900,
    brief:
      "Irrigation service. A head running, water visible, shot low against planting. Early morning light works best.",
  },
  serviceGarden: {
    src: "/images/service-garden.jpg",
    alt: "A freshly cut bed edge between black mulch and lawn.",
    width: 1200,
    height: 900,
    brief:
      "Garden maintenance service. Tight crop on a cut bed edge where mulch meets turf. This one detail sells the service.",
  },

  backyardCover: {
    src: "/images/project-backyard.jpg",
    alt: "A rebuilt rear yard with a slab patio and new sod behind a cedar fence.",
    width: 2400,
    height: 1080,
    brief:
      "Rear yard project, wide establishing shot from the house. If the slab patio job has a wider frame, use it here.",
  },
  frontEntryCover: {
    src: "/images/project-front-entry.jpg",
    alt: "A front entry with a stamped concrete walkway, stone inlay and planted beds.",
    width: 2400,
    height: 1080,
    brief: "Front entry project, wide establishing shot from the street or driveway.",
  },
  sideYardDetail: {
    src: "/images/side-yard-detail.jpg",
    alt: "A stepping stone set into black stone beside new sod.",
    width: 1200,
    height: 900,
    brief: "Side yard project detail. Close crop where the stepping stone meets the stone and the sod edge.",
  },
  backyardDetail: {
    src: "/images/project-backyard-detail.jpg",
    alt: "The joint line where a slab meets black stone and the sod edge.",
    width: 1200,
    height: 900,
    brief: "Rear yard project detail. Tight crop on a joint or the sod edge. Proves the workmanship.",
  },
  frontEntryDetail: {
    src: "/images/project-front-entry-detail.jpg",
    alt: "An inground light set flush into the stamped concrete beside the stone inlay.",
    width: 1200,
    height: 900,
    brief: "Front entry project detail. The inground light and the inlay edge, shot square on.",
  },

  aboutLead: {
    src: "/images/about-crew.jpg",
    alt: "Two of the crew setting out string lines across a stripped yard.",
    width: 1600,
    height: 1200,
    brief: "About lead. The crew at the setting out stage. Documentary, not posed.",
  },
  aboutDetail: {
    src: "/images/about-detail.jpg",
    alt: "A hand checking the level of a freshly laid slab against a string line.",
    width: 900,
    height: 1200,
    brief: "About detail. Portrait crop of a level or a string line being checked. Close and tactile.",
  },
  aboutYard: {
    src: "/images/about-yard.jpg",
    alt: "Pallets of slabs and bagged stone stacked on a truck at the start of a job.",
    width: 1200,
    height: 900,
    brief: "About supporting frame. Materials on the truck or at the yard, early morning.",
  },

  teamLead: {
    src: "/images/team-lead.jpg",
    alt: "The owner of Pure Oasis on site.",
    width: 900,
    height: 1100,
    brief: "Team portrait. Natural light, plain background, shoulders up, no crossed arms.",
  },
  teamBuild: {
    src: "/images/team-build.jpg",
    alt: "The crew lead on a build in progress.",
    width: 900,
    height: 1100,
    brief: "Team portrait, matched to the other. Shot on site rather than in studio.",
  },

  postFreezeThaw: {
    src: "/images/post-freeze-thaw.jpg",
    alt: "Frost heave lifting the corner of an older paver patio.",
    width: 1200,
    height: 800,
    brief: "Journal cover. Evidence of frost heave on a tired patio. Honest, slightly grim, well lit.",
  },
  postLawn: {
    src: "/images/post-lawn.jpg",
    alt: "A core aerator plug lying on a cut lawn.",
    width: 1200,
    height: 800,
    brief: "Journal cover. Aeration plugs on turf, shot close. Shows the soil profile.",
  },
  postBudget: {
    src: "/images/post-budget.jpg",
    alt: "A marked up landscape plan with a measuring tape resting across it.",
    width: 1200,
    height: 800,
    brief: "Journal cover. A plan with annotations and a tape. Planning and cost without showing money.",
  },

  ctaLead: {
    src: "/images/cta-lead.jpg",
    alt: "An evening view across a finished patio towards a lit house.",
    width: 1200,
    height: 900,
    brief: "Closing band, main frame. Evening, looking back at the house from the garden.",
  },
  ctaSecond: {
    src: "/images/cta-second.jpg",
    alt: "A stepping stone path running through planting.",
    width: 800,
    height: 1000,
    brief: "Closing band, second frame. Portrait, a path or level change through planting.",
  },
  ctaThird: {
    src: "/images/cta-third.jpg",
    alt: "An inground light washing a planted bed after dark.",
    width: 800,
    height: 800,
    brief: "Closing band, third frame. Square, a single warm focal point after dark.",
  },

  contactSide: {
    src: "/images/consult.jpg",
    alt: "A walkthrough at the start of a job, with a tape measure and a site sketch.",
    width: 1200,
    height: 1500,
    brief: "Consult section. Portrait crop of the first site visit. Candid, sketchbook or tape in frame.",
  },
} satisfies Record<string, PhotoSlot>;

export type PhotoKey = keyof typeof photos;

/** Slots the business already has a photograph for. */
export const suppliedPhotos = (Object.keys(photos) as PhotoKey[]).filter(
  (key) => "have" in photos[key] && photos[key].have
);
