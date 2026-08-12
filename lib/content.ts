/**
 * Every visible string that is not part of the services, projects, posts or
 * areas data lives here.
 *
 * IMPORTANT before launch: the values in `business`, `claims`, `stats` and
 * `testimonials` are placeholders written to read like a real Hamilton area
 * design-build firm. The phone number, address, founding year, warranty term,
 * insurance status and every number below must be replaced with real details,
 * and every claim must be one the business can actually stand behind.
 */

export const SITE_URL = "https://pureoasis.ca";

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
  streetAddress: "1240 Rymal Road East, Unit 6",
  locality: "Hamilton",
  region: "ON",
  postalCode: "L8W 3N7",
  hours: [
    { days: "Monday to Friday", time: "7:00 to 17:00" },
    { days: "Saturday", time: "By appointment" },
    { days: "Sunday", time: "Closed" },
  ],
  // TODO(client): point these at the real accounts, or delete the ones that do not exist.
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
} as const;

/** TODO(client): confirm each of these before the site goes live. */
export const claims = [
  { label: "Building in the region since", value: "2009" },
  { label: "Coverage", value: "Fully insured, WSIB covered" },
  { label: "Workmanship warranty", value: "Three years, in writing" },
] as const;

/** TODO(client): every one of these numbers needs to be a real number. */
export const stats = [
  { value: "412", label: "Gardens designed and built since 2009" },
  { value: "68%", label: "Of last season's work came from referrals" },
  { value: "9", label: "People on the build crew, no subcontracted labour" },
  { value: "3 years", label: "Written workmanship warranty on every build" },
] as const;

export const nav = {
  links: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", hasChildren: true },
    { label: "Projects", href: "/projects" },
    { label: "Journal", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  /** One label per intent. This exact string is the only contact CTA. */
  cta: { label: "Book a consult", href: "/contact" },
} as const;

export const hero = {
  eyebrow: "Hamilton, Burlington and the west GTA",
  headline: "Stone, water and planting, built to last Ontario winters.",
  sub: "Full service landscape design and construction for homes across Hamilton, Burlington and the west GTA. One crew, start to finish.",
  primary: { label: "Book a consult", href: "/contact" },
  secondary: { label: "See our work", href: "/projects" },
} as const;

export const about = {
  teaserHeadline: "We build the part you never see with the same care as the part you do.",
  teaserBody:
    "Pure Oasis is a design and build practice, which means the person who draws your garden is accountable for what the crew puts in the ground. There is no handover to a stranger halfway through, and no quote that quietly reduces the base depth to win the job.",
  teaserLink: { label: "About the practice", href: "/about" },

  storyHeadline: "A drawing office and a build crew, under one roof.",
  story: [
    "Pure Oasis started in 2009 doing hard landscape for other people's drawings. We spent enough years correcting plans that could not be built to decide we should be doing both parts ourselves.",
    "Today the practice runs a drawing office and a single build crew. Everything is designed in house and built by people on our own payroll, which is the only arrangement we have found where nobody can point at somebody else when a level is wrong.",
    "We take on a limited number of builds each season for the same reason. Two crews would double the revenue and halve the supervision, and the supervision is the product.",
  ],
  values: [
    {
      title: "The base is not negotiable",
      body: "Everything below the surface is specified for the soil on your property. It is the first thing a competing quote reduces and the last thing we will.",
    },
    {
      title: "One crew, one supervisor",
      body: "The same people arrive each morning for the length of your build. No rotating subcontractors and no site left to run itself.",
    },
    {
      title: "Drawings you own",
      body: "Design work is priced and delivered as its own service. If you decide to build with someone else, you leave with everything you paid for.",
    },
    {
      title: "We say what things cost",
      body: "Budget ranges are published on this site. A fixed price follows the survey and the drawings rather than the other way round.",
    },
  ],
  team: [
    {
      name: "Renata Ilić",
      role: "Design lead",
      bio: "Trained in landscape architecture and spent nine years on residential work across the west GTA before joining Pure Oasis. Draws every plan that leaves the office.",
      photo: "teamLead",
    },
    {
      name: "Marcus Adeyemi",
      role: "Site supervisor",
      bio: "Runs the build crew and every site. Started in hard landscape at nineteen and has been setting stone in this region ever since.",
      photo: "teamBuild",
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

export const closing = {
  headline: "The best time to start is the season before you want to use it.",
  body: "Design runs four to six weeks and builds are scheduled in order of booking. Starting a garden in autumn is how it is finished by the following June.",
  cta: { label: "Book a consult", href: "/contact" },
} as const;

export const footer = {
  blurb:
    "Landscape design and construction for homes in Hamilton, Burlington and the west GTA. Designed in house, built by our own crew.",
} as const;
