import type { PhotoKey } from "@/lib/photos";

export type Service = {
  slug: string;
  title: string;
  /** How the service is described in a sentence, used across the grids. */
  summary: string;
  /** Opening paragraph on the service page. */
  intro: string;
  photo: PhotoKey;
  /** Recurring services are sold by the season, builds are sold by the job. */
  billing: "project" | "seasonal";
  includes: readonly string[];
  detail: readonly { title: string; body: string }[];
  faqs: readonly { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const services: readonly Service[] = [
  {
    slug: "landscape-design",
    title: "Landscape design",
    summary:
      "A measured plan for the whole property, drawn so it can be priced, phased and actually built.",
    intro:
      "Design comes first and stands on its own. We survey the property, work out what the ground is doing, and draw a plan detailed enough to build from. The drawings are yours whether or not we build them.",
    photo: "serviceDesign",
    billing: "project",
    includes: [
      "Measured site survey",
      "Grading and drainage strategy",
      "Layout and materials board",
      "Planting plan by exposure",
      "Drawings you can price against",
    ],
    detail: [
      {
        title: "We survey before we draw",
        body: "Levels, drainage, sun and soil get recorded on site. Most of what makes a garden work here is decided by water and exposure, and neither is visible in a photograph of your yard.",
      },
      {
        title: "The plan is priceable",
        body: "A concept sketch is not a plan. What you receive includes layout, materials, quantities and levels, so any competent builder in the region can quote it line by line.",
      },
      {
        title: "Built in phases if that suits the budget",
        body: "Plenty of properties get built over two or three seasons. Designing the whole thing first is what keeps phase two from tearing up phase one.",
      },
    ],
    faqs: [
      {
        question: "Can we buy the design and build it ourselves?",
        answer:
          "Yes. The drawings are yours. Some clients build with their own crew, some phase the work over several years, and some come back to us later.",
      },
      {
        question: "Do we need a design for a small job?",
        answer:
          "Not always. A single walkway or a bed refresh can be quoted from a site visit. Anything that changes grade, drainage or the layout of the whole yard is worth drawing first.",
      },
    ],
    metaTitle: "Landscape Design in Hamilton",
    metaDescription:
      "Measured surveys, grading and drainage strategy, layouts and planting plans for homes in Hamilton and the surrounding areas. Drawings you can price and build from.",
  },
  {
    slug: "hardscape-and-interlock",
    title: "Hardscape and interlock",
    summary:
      "Patios, walkways, steps and retaining, set on a full depth base with the drainage worked out first.",
    intro:
      "Hardscape is where local work usually fails, and it almost always fails underneath. We build the base for the soil that is actually there, and we take drainage as seriously as the surface you can see.",
    photo: "serviceHardscape",
    billing: "project",
    includes: [
      "Patios and slab terraces",
      "Walkways, steps and landings",
      "Interlock driveways and entries",
      "Retaining and armour stone",
      "Decorative stone and edging",
    ],
    detail: [
      {
        title: "Base depth follows the soil",
        body: "Clay holds water and moves more than sand. We check what is under the topsoil and build the base to suit it, which across most of Hamilton means more depth than a quoted average.",
      },
      {
        title: "Water leaves on purpose",
        body: "Falls, drains and sleeving are set out before anything is laid. Nothing gets solved after the stone is down, because by then the only fix is lifting it.",
      },
      {
        title: "Joints and edges are the tell",
        body: "Whether a patio is tight jointed or set in decorative stone, the edge restraint and the cuts at every border are the reason it still lines up in year ten.",
      },
    ],
    faqs: [
      {
        question: "Slabs with stone joints, or tight laid interlock?",
        answer:
          "Both work well here. Large format slabs with a decorative stone joint drain freely and suit a modern yard. Tight laid interlock gives a continuous surface and takes vehicle loads. We price whichever suits the use.",
      },
      {
        question: "How long does a patio take?",
        answer:
          "A typical rear yard patio runs one to two weeks depending on access and how much excavation is involved. Restricted access with no rear gate is the biggest variable.",
      },
    ],
    metaTitle: "Interlock, Patios and Hardscape in Hamilton",
    metaDescription:
      "Patios, walkways, steps, driveways and retaining walls built on a full depth base with drainage designed in. Serving Hamilton and the surrounding areas.",
  },
  {
    slug: "lawn-care",
    title: "Lawn care",
    summary:
      "Weekly cutting, fertilising, aeration and new sod, on a schedule you do not have to chase.",
    intro:
      "A good lawn is a maintenance programme rather than a product. We cut on a fixed weekly rotation, feed it on a schedule that matches the season, and fix the soil underneath when the grass is telling us that is the real problem.",
    photo: "serviceLawn",
    billing: "seasonal",
    includes: [
      "Weekly cutting and trimming",
      "Seasonal fertiliser programme",
      "Core aeration and overseeding",
      "New sod and grading",
      "Spring and autumn cleanups",
    ],
    detail: [
      {
        title: "Same day, every week",
        body: "Properties are grouped by area so your cut lands on the same day each week. The crew works one route rather than criss crossing the region, which is how the schedule stays reliable.",
      },
      {
        title: "Feeding beats patching",
        body: "Most thin lawns in this region are a soil and compaction problem. Aeration and a proper feeding schedule fix more than repeatedly reseeding the same bare patch.",
      },
      {
        title: "New sod gets a proper bed",
        body: "Sod laid onto compacted subsoil roots poorly and shows it by August. We strip, grade and add screened topsoil before anything is rolled out.",
      },
    ],
    faqs: [
      {
        question: "Do you take on weekly cutting only?",
        answer:
          "Yes. Weekly maintenance is sold on its own and does not require a build with us first.",
      },
      {
        question: "What happens if it rains on our day?",
        answer:
          "The route shifts to the next working day. We do not cut saturated turf, because it tears the crown and leaves ruts that last all season.",
      },
    ],
    metaTitle: "Lawn Care and Maintenance in Hamilton",
    metaDescription:
      "Weekly cutting, seasonal fertilising, aeration, overseeding and new sod for homes in Hamilton and the surrounding areas. Fixed weekly schedule by area.",
  },
  {
    slug: "irrigation",
    title: "Irrigation",
    summary:
      "Zoned systems installed, serviced, started in spring and blown out before the first freeze.",
    intro:
      "Irrigation is cheap to install while the ground is open and expensive to retrofit afterwards. Zones are set by what each area actually needs, so beds and turf are not watered on the same schedule.",
    photo: "serviceIrrigation",
    billing: "seasonal",
    includes: [
      "System design and installation",
      "Zoned drip and spray",
      "Sleeving under hard surfaces",
      "Controllers and rain sensors",
      "Spring start and autumn blowout",
    ],
    detail: [
      {
        title: "Sleeving during construction",
        body: "Conduit under every hard surface costs very little while a patio is being built. Without it, adding a line later means cutting the patio apart.",
      },
      {
        title: "Zones follow water need",
        body: "Turf, beds and containers dry out at different rates. Separate zones mean each gets what it needs instead of everything getting the same and something always being wrong.",
      },
      {
        title: "Winterised properly",
        body: "Lines are blown out with compressed air before the first hard freeze. A system left charged over a Hamilton winter is a repair bill in April.",
      },
    ],
    faqs: [
      {
        question: "Can a system be added to a finished garden?",
        answer:
          "Yes. Trenching through established turf heals over within a few weeks. Running lines under existing hard surfaces is the part that gets expensive.",
      },
      {
        question: "Do you service systems you did not install?",
        answer:
          "Yes, including seasonal start ups and blowouts, provided the system is in serviceable condition when we first see it.",
      },
    ],
    metaTitle: "Irrigation Installation and Service, Hamilton",
    metaDescription:
      "Zoned irrigation designed, installed and serviced in Hamilton and the surrounding areas. Sleeving, controllers, spring start up and autumn blowouts.",
  },
  {
    slug: "garden-maintenance",
    title: "Garden maintenance",
    summary:
      "Beds edged, mulched, pruned and weeded through the season so the planting keeps its shape.",
    intro:
      "Planting is the part of a property that changes every week. Regular maintenance is what separates a garden that reads as designed from one that reads as overgrown, and it costs far less than rebuilding beds every few years.",
    photo: "serviceGarden",
    billing: "seasonal",
    includes: [
      "Bed edging and mulch",
      "Pruning and shaping",
      "Weeding through the season",
      "Seasonal planting rotations",
      "Spring and autumn cleanups",
    ],
    detail: [
      {
        title: "The edge does most of the work",
        body: "A cut edge between bed and lawn is the single detail that makes planting look maintained. It gets recut every visit rather than once a year.",
      },
      {
        title: "Mulch is depth, not decoration",
        body: "Laid at the right depth, mulch suppresses weeds and holds moisture through August. Laid thin for appearance, it does neither and needs redoing by midsummer.",
      },
      {
        title: "Pruned to the plant, not the calendar",
        body: "Shrubs get cut on their own cycle. Shearing everything into balls in June is why so many front gardens stop flowering.",
      },
    ],
    faqs: [
      {
        question: "How often do you visit?",
        answer:
          "Most properties are every two weeks through the growing season, with heavier spring and autumn cleanups. Larger or more detailed gardens go weekly.",
      },
      {
        question: "Can maintenance be combined with lawn care?",
        answer:
          "Yes, and it usually is. Combining them means one crew, one visit and one invoice, and the beds and the turf get looked at together.",
      },
    ],
    metaTitle: "Garden Maintenance in Hamilton",
    metaDescription:
      "Bed edging, mulching, pruning, weeding and seasonal cleanups for homes in Hamilton and the surrounding areas. Weekly or fortnightly through the season.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const projectServices = services.filter((service) => service.billing === "project");
export const seasonalServices = services.filter((service) => service.billing === "seasonal");
