import type { PhotoKey } from "@/lib/photos";

export type Service = {
  slug: string;
  title: string;
  /** One line for the services grid. */
  summary: string;
  /** Opening paragraph on the service page. */
  intro: string;
  photo: PhotoKey;
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
      "A measured survey, a planting plan and a build drawing you can hand to any contractor for pricing.",
    intro:
      "Design comes first and stands on its own. We survey the property, work out what the ground is doing, and draw a plan detailed enough to build from. The drawings are yours whether or not we build them.",
    photo: "serviceDesign",
    includes: [
      "Measured site survey",
      "Grading and drainage strategy",
      "Concept plan and materials board",
      "Planting plan by exposure",
      "Construction drawings for pricing",
    ],
    detail: [
      {
        title: "We survey before we draw",
        body: "Levels, drainage, sun and soil get recorded on site. Most of what makes a garden work here is decided by water and exposure, and neither is visible in a photograph of your yard.",
      },
      {
        title: "The plan is priceable",
        body: "A concept sketch is not a plan. What you receive includes sections, materials, quantities and levels, so any competent builder in the region can quote it line by line.",
      },
      {
        title: "Two rounds of revisions",
        body: "Changes are expected. Two rounds are included in the design fee, and we would rather move a terrace on paper than after it is built.",
      },
    ],
    faqs: [
      {
        question: "Can we buy the design and build it ourselves?",
        answer:
          "Yes. The drawings are yours. Some clients build with their own crew, some phase the work over several years, and some come back to us later.",
      },
      {
        question: "How long does design take?",
        answer:
          "Four to six weeks from survey to final drawings for a typical residential property, longer if a pool or a permit is involved.",
      },
    ],
    metaTitle: "Landscape Design in Hamilton and Burlington",
    metaDescription:
      "Measured surveys, grading and drainage strategy, planting plans and construction drawings for homes in Hamilton, Burlington and the west GTA.",
  },
  {
    slug: "interlock-and-natural-stone",
    title: "Interlock and natural stone",
    summary:
      "Terraces, steps, retaining walls and driveways set on a full depth base, with drainage worked out first.",
    intro:
      "Hard landscape is where local work usually fails, and it almost always fails underneath. We build the base for the soil that is actually there, and we take drainage as seriously as the surface you can see.",
    photo: "serviceStone",
    includes: [
      "Terraces and patios",
      "Steps, risers and landings",
      "Retaining and armour stone walls",
      "Driveways and entries",
      "Edge restraint and full depth cuts",
    ],
    detail: [
      {
        title: "Base depth follows the soil",
        body: "Clay holds water and moves more than sand. We test what is under the topsoil and build the base to suit it, which across most of Hamilton means more depth than a quoted average.",
      },
      {
        title: "Water leaves on purpose",
        body: "Falls, drains and sleeving are set out at design stage. Nothing gets solved after the stone is down, because by then the only fix is lifting it.",
      },
      {
        title: "Edges are the tell",
        body: "Pavers spread from the edges inward. Proper restraint and full depth cuts at every border are why a terrace still lines up in year ten.",
      },
    ],
    faqs: [
      {
        question: "Natural stone or manufactured pavers?",
        answer:
          "Both work here. Manufactured units are dimensionally consistent and usually cheaper to lay. Natural stone reads better against an older house and ages differently. We price both when the choice is genuinely open.",
      },
      {
        question: "How long before we can use it?",
        answer:
          "A mortared surface needs a curing period. Dry laid work is usable as soon as the joints are set and swept, normally the same week.",
      },
    ],
    metaTitle: "Interlock and Natural Stone Patios, Hamilton",
    metaDescription:
      "Terraces, steps, retaining walls and driveways built on a full depth base with drainage designed in. Serving Hamilton, Burlington, Ancaster and Oakville.",
  },
  {
    slug: "pools-and-water",
    title: "Pools, spas and water",
    summary:
      "Coping, decking and the grading that surrounds a pool, led by us or scheduled around your pool contractor.",
    intro:
      "A pool is only as good as the ground around it. We handle the surround, the drainage and the planting that makes the whole thing feel like part of the garden rather than an appliance dropped into a lawn.",
    photo: "serviceWater",
    includes: [
      "Coping and deck surfaces",
      "Grading and deck drainage",
      "Equipment screening",
      "Fencing and gate coordination",
      "Water features and spillways",
    ],
    detail: [
      {
        title: "We work either way",
        body: "We lead the whole build and bring the pool contractor in, or we work to their schedule and take over at backfill. Both happen often, and the sequence gets agreed before anyone digs.",
      },
      {
        title: "The deck sheds away from the water",
        body: "Falls, drains and the coping detail get designed together. Getting this wrong is what puts silt and debris in a pool every time it rains.",
      },
      {
        title: "Planting softens the equipment",
        body: "Pumps, heaters and fencing are part of the design brief, not an afterthought to screen once the concrete is poured.",
      },
    ],
    faqs: [
      {
        question: "Do you install the pool itself?",
        answer:
          "No. Pool shells and mechanical systems are a licensed trade of their own. We design and build everything around it and coordinate the sequence.",
      },
      {
        question: "When should the landscape be designed?",
        answer:
          "Before the pool is sited if possible. Moving a pool on paper costs nothing. Moving the grade around a finished pool costs a great deal.",
      },
    ],
    metaTitle: "Pool Surrounds and Water Features, Burlington",
    metaDescription:
      "Pool coping, decking, drainage and planting designed as one landscape. Working with your pool contractor across Burlington, Oakville and Hamilton.",
  },
  {
    slug: "planting-and-soil",
    title: "Planting and soil",
    summary:
      "Beds rebuilt from the soil up, with species chosen for the exposure they actually get on your property.",
    intro:
      "Most failed planting in this region is a soil problem wearing a plant costume. We test what is there, amend it properly, and choose species for the light, wind and drainage your garden really has.",
    photo: "servicePlanting",
    includes: [
      "Soil testing and amendment",
      "Bed construction and edging",
      "Native and adapted species",
      "Seasonal planting windows",
      "First year establishment care",
    ],
    detail: [
      {
        title: "Soil first",
        body: "Compaction, pH and drainage get corrected before anything is planted. New plants into old compacted clay is the most expensive way to buy firewood.",
      },
      {
        title: "Exposure decides the list",
        body: "A south facing wall in Stoney Creek and a shaded north side in Dundas are different climates. The planting list follows the site, not a catalogue.",
      },
      {
        title: "Planted in the right window",
        body: "Spring and early autumn give roots time to establish. We schedule planting to those windows rather than to whenever the hard landscape happens to finish.",
      },
    ],
    faqs: [
      {
        question: "Do you use native plants?",
        answer:
          "Where they suit the conditions and the look you want, yes. A mixed list of natives and well adapted non natives usually performs better than either approach on its own.",
      },
      {
        question: "What happens if something dies?",
        answer:
          "Plant material carries a one year replacement on stock we supply and install, provided the watering schedule we leave you has been followed.",
      },
    ],
    metaTitle: "Garden Planting and Soil Preparation, Hamilton Area",
    metaDescription:
      "Beds rebuilt from the soil up with species chosen for real exposure. Soil testing, amendment and establishment care across Hamilton and Burlington.",
  },
  {
    slug: "lighting-and-irrigation",
    title: "Lighting and irrigation",
    summary:
      "Low voltage lighting and zoned irrigation, sleeved and wired before the stone goes down.",
    intro:
      "Both of these systems are cheap to install during a build and expensive to retrofit afterwards. Sleeving and wiring go in while the ground is open, even when the fixtures come later.",
    photo: "serviceLighting",
    includes: [
      "Low voltage LED lighting",
      "Zoned drip and spray irrigation",
      "Sleeving under all hard surfaces",
      "Timers and controllers",
      "Autumn shutdown and spring start",
    ],
    detail: [
      {
        title: "Sleeving is not optional",
        body: "Conduit under every hard surface costs very little during construction. Without it, adding a light or a line later means cutting a terrace apart.",
      },
      {
        title: "Light the ground, not the neighbours",
        body: "Low fixtures grazing stone and planting do more than floodlights aimed at a house. Restraint reads as expensive, and it keeps light out of bedrooms.",
      },
      {
        title: "Zones follow water need",
        body: "Lawn, beds and containers dry out at different rates. Separate zones mean each gets what it needs instead of everything getting the same.",
      },
    ],
    faqs: [
      {
        question: "Can lighting be added to an existing garden?",
        answer:
          "Yes, though cable routing around finished hard landscape limits where fixtures can go. It is always cheaper and tidier as part of a build.",
      },
      {
        question: "Do you handle winterisation?",
        answer:
          "Autumn shutdown and spring start up are included for the first year on systems we install, and available as a seasonal service after that.",
      },
    ],
    metaTitle: "Landscape Lighting and Irrigation, Hamilton",
    metaDescription:
      "Low voltage landscape lighting and zoned irrigation, sleeved during construction. Design, installation and seasonal service in the west GTA.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
