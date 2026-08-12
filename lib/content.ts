/**
 * Every visible string on the site lives here.
 *
 * IMPORTANT before launch: the values in `business` and `claims` are
 * placeholders written to read like a real Hamilton area design-build firm.
 * The phone number, address, founding year, warranty term and insurance
 * status must be replaced with the real details, and every claim must be one
 * the business can actually stand behind.
 */

export const business = {
  name: "Pure Oasis",
  legalName: "Pure Oasis Landscape Design and Build",
  tagline: "Landscape design and build",
  // TODO(client): replace with the real published number.
  phone: "(905) 462-7318",
  phoneHref: "tel:+19054627318",
  email: "hello@pureoasis.ca",
  // TODO(client): replace with the real yard or office address.
  addressLines: ["1240 Rymal Road East, Unit 6", "Hamilton, ON L8W 3N7"],
  hours: [
    { days: "Monday to Friday", time: "7:00 to 17:00" },
    { days: "Saturday", time: "By appointment" },
  ],
  serviceArea: [
    "Hamilton",
    "Burlington",
    "Ancaster",
    "Dundas",
    "Waterdown",
    "Oakville",
    "Stoney Creek",
    "Grimsby",
    "Milton",
    "Mississauga",
  ],
} as const;

/** TODO(client): confirm each of these before the site goes live. */
export const claims = [
  { label: "Building in the region since", value: "2009" },
  { label: "Coverage", value: "Fully insured, WSIB covered" },
  { label: "Workmanship warranty", value: "Three years, in writing" },
] as const;

export const nav = {
  links: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
  ],
  /** One label per intent. This exact string is the only contact CTA. */
  cta: { label: "Book a consult", href: "#consult" },
} as const;

export const hero = {
  eyebrow: "Hamilton, Burlington and the west GTA",
  headline: "Stone, water and planting, built to last Ontario winters.",
  sub: "Full service landscape design and construction for homes across Hamilton, Burlington and the west GTA. One crew, start to finish.",
  primary: { label: "Book a consult", href: "#consult" },
  secondary: { label: "See our work", href: "#work" },
} as const;

export const services = {
  headline: "What we build.",
  items: [
    {
      id: "design",
      title: "Landscape design",
      body: "A measured survey, a planting plan and a build drawing you can hand to any contractor for pricing. The drawings are yours whether or not we build them.",
    },
    {
      id: "stone",
      title: "Interlock and natural stone",
      body: "Terraces, steps, retaining walls and driveways set on a full depth base, with the drainage worked out before the first cut.",
    },
    {
      id: "water",
      title: "Pools, spas and water",
      body: "Coping, decking and the grading that surrounds a pool. We lead the build or work to your pool contractor's schedule.",
    },
    {
      id: "planting",
      title: "Planting and soil",
      body: "Beds rebuilt from the soil up, with species chosen for the exposure they actually get on your property.",
      points: ["Soil testing and amendment", "Native and adapted species", "Planting to the right season"],
    },
    {
      id: "systems",
      title: "Lighting and irrigation",
      body: "Low voltage lighting and zoned irrigation, sleeved and wired before the stone goes down.",
      points: ["Low voltage LED", "Zoned drip and spray", "Autumn shutdown included"],
    },
  ],
} as const;

export const process = {
  headline: "How a build runs.",
  steps: [
    {
      title: "Walkthrough",
      body: "We meet at the property, take measurements, and talk about budget in real numbers before anything is drawn.",
    },
    {
      title: "Design",
      body: "A concept plan, material selections and a fixed price. Two rounds of revisions are included.",
    },
    {
      title: "Build",
      body: "One crew and one site supervisor for the whole job, working to a schedule you can hold us to.",
    },
    {
      title: "Handover",
      body: "A care sheet, an irrigation walkthrough, and a return visit the following spring to check how the planting took.",
    },
  ],
} as const;

export const project = {
  eyebrow: "Recent work",
  title: "A sloped Ancaster lot, rebuilt as three level terraces.",
  body: "The rear yard dropped almost three metres from the house to the fence line and shed water straight into the neighbour's garden. We regraded the slope, held it with two dry laid armour stone walls, and cut the usable ground into three terraces with a fire table on the middle level.",
  facts: [
    { label: "Location", value: "Ancaster, Ontario" },
    { label: "Scope", value: "Regrading, armour stone, terraces, planting, lighting" },
    { label: "Completed", value: "Autumn 2025" },
  ],
} as const;

export const durability = {
  headline: "Most local hardscape fails in the third winter.",
  intro:
    "Freeze and thaw is why so much of it looks tired by year three. These are the three places we do not cut cost.",
  points: [
    {
      title: "Base depth",
      body: "Anything set on a thin gravel bed moves once the ground freezes. We build the base to suit the soil under it, which in most of Hamilton means more depth than a quoted average.",
    },
    {
      title: "Drainage",
      body: "Water has to leave the property on purpose. Grading, drains and sleeved lines are planned at design stage, not solved after the stone is down.",
    },
    {
      title: "Edge restraint",
      body: "Pavers spread from the edges inward. Proper restraint and full depth cuts at every border are the reason a terrace still lines up in year ten.",
    },
  ],
} as const;

export const testimonials = {
  headline: "From homeowners in the region.",
  items: [
    {
      quote:
        "They found a drainage problem the previous contractor had buried. Four winters on, the terrace has not moved.",
      name: "Marisol Trần",
      place: "Ancaster",
    },
    {
      quote:
        "The drawings were detailed enough to price against two other builders. Pure Oasis still won the job.",
      name: "Devin Okonkwo",
      place: "Burlington",
    },
    {
      quote:
        "Same crew every morning for six weeks, and the driveway was swept before they left each night.",
      name: "Hannah Beaudoin",
      place: "Dundas",
    },
  ],
} as const;

export const pricing = {
  headline: "What projects cost here.",
  note: "Ranges are indicative. A fixed price follows the walkthrough and the drawings.",
  tiers: [
    {
      title: "Garden and entry refresh",
      range: "$18,000 to $45,000",
      body: "Front beds, a rebuilt walkway, path lighting and a planting plan for the whole frontage.",
      includes: ["Planting plan", "Walkway or landing", "Path lighting"],
    },
    {
      title: "Full backyard build",
      range: "$60,000 to $180,000",
      body: "Terrace, grading, drainage, planting and lighting delivered as one build rather than in stages.",
      includes: [
        "Grading and drainage",
        "Terrace and steps",
        "Planting and irrigation",
        "Lighting",
      ],
      featured: true,
    },
    {
      title: "Estate grounds",
      range: "$200,000 and up",
      body: "Multi season programs across a whole property, including pool surrounds, structures and full irrigation.",
      includes: ["Multi phase schedule", "Pool surrounds", "Structures", "Full irrigation"],
    },
  ],
} as const;

export const consult = {
  headline: "Tell us about the property.",
  body: "We answer within one business day and book walkthroughs Monday to Friday. Design work for the coming season is usually booked out by March.",
  projectTypes: [
    "Full backyard build",
    "Terrace, steps or walls",
    "Front entry and planting",
    "Pool surround",
    "Lighting or irrigation",
    "Not sure yet",
  ],
  budgets: [
    "Under $25,000",
    "$25,000 to $60,000",
    "$60,000 to $120,000",
    "$120,000 to $250,000",
    "Over $250,000",
  ],
  timelines: ["This season", "Next season", "Planning ahead"],
} as const;

export const footer = {
  blurb:
    "Landscape design and construction for homes in Hamilton, Burlington and the west GTA.",
  columns: [
    {
      title: "Services",
      links: services.items.map((s) => ({ label: s.title, href: "#services" })),
    },
    {
      title: "Company",
      links: [
        { label: "Work", href: "#work" },
        { label: "Process", href: "#process" },
        { label: "Pricing", href: "#pricing" },
        { label: "Book a consult", href: "#consult" },
      ],
    },
  ],
} as const;
