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
      "Home hero. Portrait crop of a finished backyard at blue hour. Terrace in the foreground, planting and a lit tree behind. No people, no furniture clutter.",
  },

  serviceDesign: {
    src: "/images/service-design.jpg",
    alt: "A landscape plan on a work table beside stone and paver samples.",
    width: 1200,
    height: 900,
    brief:
      "Design service. Overhead of a planting plan with material samples. Warm task light, tight crop, no branded product labels.",
  },
  serviceStone: {
    src: "/images/service-stone.jpg",
    alt: "A crew setting a full-depth flagstone step onto a compacted base.",
    width: 1000,
    height: 1250,
    brief:
      "Stonework. Portrait crop, hands and a stone in motion, granular base visible. Real site, not a showroom.",
  },
  serviceWater: {
    src: "/images/service-water.jpg",
    alt: "A rectangular pool with a stone coping edge and a planted screen behind it.",
    width: 1600,
    height: 900,
    brief:
      "Pools and water. Wide crop of a pool or water feature edge at the coping line. Calm surface, evening light.",
  },
  servicePlanting: {
    src: "/images/service-planting.jpg",
    alt: "A newly planted perennial border with amended soil visible at the edge.",
    width: 1600,
    height: 900,
    brief:
      "Planting. A freshly planted bed photographed low, showing soil structure and spacing. Late spring.",
  },
  serviceLighting: {
    src: "/images/service-lighting.jpg",
    alt: "Low path lights washing a stone stair and the planting beside it after dark.",
    width: 1600,
    height: 900,
    brief:
      "Lighting and irrigation. After dark, low fixtures grazing a stair or wall. Warm, restrained, no light pollution.",
  },

  aboutLead: {
    src: "/images/about-crew.jpg",
    alt: "Two of the build crew setting out string lines across a stripped rear yard.",
    width: 1600,
    height: 1200,
    brief:
      "About lead. The crew at the setting out stage, string lines and a stripped yard. Documentary, not posed.",
  },
  aboutDetail: {
    src: "/images/about-detail.jpg",
    alt: "A hand checking the level of a freshly laid paver against a string line.",
    width: 900,
    height: 1200,
    brief:
      "About detail. Portrait crop of a level, a string line or a joint being checked. Close, tactile.",
  },
  aboutYard: {
    src: "/images/about-yard.jpg",
    alt: "Pallets of stone and aggregate stacked at the company yard.",
    width: 1200,
    height: 900,
    brief: "About supporting frame. The yard, pallets of stone, early morning. Wide enough to read as a place.",
  },

  teamLead: {
    src: "/images/team-lead.jpg",
    alt: "The design lead standing at the drawing table.",
    width: 900,
    height: 1100,
    brief: "Team portrait. Natural light, plain background, shoulders up, no crossed arms.",
  },
  teamBuild: {
    src: "/images/team-build.jpg",
    alt: "The site supervisor on a build in progress.",
    width: 900,
    height: 1100,
    brief: "Team portrait, matched to the other. Shot on site rather than in studio.",
  },

  projectAncasterCover: {
    src: "/images/project-ancaster.jpg",
    alt: "A wide view of a rebuilt Ancaster backyard with a terrace, a fire table and a sloped lawn.",
    width: 2400,
    height: 1080,
    brief:
      "Ancaster project, establishing shot. Ultra wide, from the house looking out, late afternoon.",
  },
  projectAncasterDetail: {
    src: "/images/project-ancaster-detail.jpg",
    alt: "A close view of the terrace joint line where cut stone meets a planted bed.",
    width: 1200,
    height: 900,
    brief: "Ancaster project detail. Tight crop on a joint, edge restraint or riser. Proves the workmanship.",
  },
  projectBurlingtonCover: {
    src: "/images/project-burlington.jpg",
    alt: "A Burlington pool surround in cut limestone with a planted screen along the fence line.",
    width: 2400,
    height: 1080,
    brief: "Burlington project, establishing shot. Pool surround, wide, water calm, no swimmers.",
  },
  projectBurlingtonDetail: {
    src: "/images/project-burlington-detail.jpg",
    alt: "The coping edge where the limestone deck meets the water line.",
    width: 1200,
    height: 900,
    brief: "Burlington project detail. The coping and waterline joint, shot close and square on.",
  },
  projectDundasCover: {
    src: "/images/project-dundas.jpg",
    alt: "A narrow Dundas garden with a rebuilt walkway and layered planting to both sides.",
    width: 2400,
    height: 1080,
    brief: "Dundas project, establishing shot. Narrow lot, walkway leading the eye, overcast light is fine.",
  },
  projectDundasDetail: {
    src: "/images/project-dundas-detail.jpg",
    alt: "Layered planting pressing up against the edge of the new walkway.",
    width: 1200,
    height: 900,
    brief: "Dundas project detail. Planting meeting hard edge, showing how tight the tolerance is.",
  },

  postFreezeThaw: {
    src: "/images/post-freeze-thaw.jpg",
    alt: "Frost heave lifting the corner of an older paver terrace.",
    width: 1200,
    height: 800,
    brief: "Blog cover. Evidence of frost heave on a tired terrace. Honest, slightly grim, well lit.",
  },
  postNativePlanting: {
    src: "/images/post-native-planting.jpg",
    alt: "A native perennial border in late summer with seed heads left standing.",
    width: 1200,
    height: 800,
    brief: "Blog cover. Native planting late in the season, seed heads intact. Golden hour.",
  },
  postBudget: {
    src: "/images/post-budget.jpg",
    alt: "A marked up landscape plan with a measuring tape resting across it.",
    width: 1200,
    height: 800,
    brief: "Blog cover. A plan with annotations and a tape. Suggests planning and cost without showing money.",
  },

  ctaLead: {
    src: "/images/cta-lead.jpg",
    alt: "An evening view across a finished terrace towards a lit house.",
    width: 1200,
    height: 900,
    brief: "Closing band, main frame. Evening, looking back at the house from the garden.",
  },
  ctaSecond: {
    src: "/images/cta-second.jpg",
    alt: "A stone stair descending through planting.",
    width: 800,
    height: 1000,
    brief: "Closing band, second frame. Portrait, a stair or level change through planting.",
  },
  ctaThird: {
    src: "/images/cta-third.jpg",
    alt: "A fire table lit on a terrace after dark.",
    width: 800,
    height: 800,
    brief: "Closing band, third frame. Square, a single warm focal point after dark.",
  },

  contactSide: {
    src: "/images/consult.jpg",
    alt: "A designer walking a client through a rear yard with a tape measure and a site sketch.",
    width: 1200,
    height: 1500,
    brief: "Consult section. Portrait crop of the first site visit. Candid, two people, sketchbook or tape in frame.",
  },

  footerOne: {
    src: "/images/footer-1.jpg",
    alt: "A cut stone edge against gravel.",
    width: 600,
    height: 600,
    brief: "Footer thumbnail. Square material detail. These six should read as a set, same light and distance.",
  },
  footerTwo: {
    src: "/images/footer-2.jpg",
    alt: "A planted border along a limestone path.",
    width: 600,
    height: 600,
    brief: "Footer thumbnail. Square, planting against hard landscape.",
  },
  footerThree: {
    src: "/images/footer-3.jpg",
    alt: "Water spilling over a stone lip.",
    width: 600,
    height: 600,
    brief: "Footer thumbnail. Square, water detail.",
  },
  footerFour: {
    src: "/images/footer-4.jpg",
    alt: "A low light fixture set into a stone riser.",
    width: 600,
    height: 600,
    brief: "Footer thumbnail. Square, a lighting fixture in context.",
  },
  footerFive: {
    src: "/images/footer-5.jpg",
    alt: "A dry laid armour stone wall.",
    width: 600,
    height: 600,
    brief: "Footer thumbnail. Square, wall or retaining detail.",
  },
  footerSix: {
    src: "/images/footer-6.jpg",
    alt: "A terrace corner with furniture just visible at the edge of frame.",
    width: 600,
    height: 600,
    brief: "Footer thumbnail. Square, a finished corner. Warmest of the six.",
  },
} satisfies Record<string, PhotoSlot>;

export type PhotoKey = keyof typeof photos;
