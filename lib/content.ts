// Demo content. Nothing here asserts a fact about a real business: no real
// phone number, address, inbox, dates, prices or named customers. The phone
// number uses the 555-01xx range reserved for fictional use and the inbox
// uses example.com, reserved for documentation, so neither can reach anyone.

export const SITE_URL = "https://pureoasis.ca";

export const business = {
  name: "Pure Oasis",
  legalName: "Pure Oasis Landscaping",
  tagline: "Full service landscaping",
  phone: "(905) 555-0142",
  phoneHref: "tel:+19055550142",
  email: "hello@example.com",
  locality: "Hamilton",
  region: "ON",
  country: "CA",
  hours: [
    { days: "Monday to Friday", time: "By appointment" },
    { days: "Saturday", time: "By appointment" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

export const nav = {
  links: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", hasChildren: true },
    { label: "Projects", href: "/projects" },
    { label: "Journal", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  /** One label per intent. This exact string is the only contact CTA. */
  cta: { label: "Get a quote", href: "/contact" },
} as const;

export const hero = {
  eyebrow: "Hamilton and the surrounding areas",
  headline: "Built properly, then kept that way.",
  sub: "Full service landscaping for Hamilton and the surrounding areas. Design, hardscape, lawn care, irrigation and garden maintenance, from one crew.",
  primary: { label: "Get a quote", href: "/contact" },
  secondary: { label: "See our work", href: "/projects" },
} as const;

export const about = {
  teaserHeadline: "Most companies either build a yard or maintain one. We do both, which changes how we build.",
  teaserBody:
    "Pure Oasis is a full service landscape company serving Hamilton and the surrounding areas. Because we are often the ones cutting the lawn and edging the beds two years later, we build things that are straightforward to keep. That is a different set of decisions than a crew who will never see the property again.",
  teaserLink: { label: "About Pure Oasis", href: "/about" },

  storyHeadline: "A landscape company that stays on the property.",
  story: [
    "Pure Oasis Landscaping transforms outdoor spaces into landscapes that are worth looking at and easy to live with, and that hold their value. We work across design, hardscape, lawn care, irrigation and garden maintenance, which means most of our properties get built and then looked after by the same people.",
    "That combination is the whole point. A patio is laid by the crew who will be edging the sod against it next season. Beds are planted at a spacing that can actually be maintained. Irrigation is sleeved during the build because we know what retrofitting one costs.",
    "We keep the maintenance routes tight by area so the schedule holds, and we would rather turn down a build than run two crews and supervise neither properly.",
  ],
  values: [
    {
      title: "The base is not negotiable",
      body: "Everything below the surface is specified for the soil on your property. It is the first thing a competing quote reduces and the last thing we will.",
    },
    {
      title: "One crew, one supervisor",
      body: "The same people arrive each morning for the length of your build, and on the same day each week once you are on a maintenance route.",
    },
    {
      title: "Built to be maintained",
      body: "Edges, spacing and access get decided with the maintenance visit in mind, because we are usually the ones coming back.",
    },
    {
      title: "We say what things cost",
      body: "You get a scope and a fixed price after the site visit, not a number over the phone that moves once we are on site.",
    },
  ],
  team: [
    {
      name: "Ramiro",
      role: "Crew lead",
      bio: "Runs the build crew and the maintenance routes, and is on site for the length of every job.",
      photo: "teamBuild",
    },
  ],
} as const;

export const process = {
  headline: "How a job runs.",
  steps: [
    {
      title: "Site visit",
      body: "We walk the property, take measurements, and talk about budget in real numbers before anything is drawn or quoted.",
    },
    {
      title: "Quote or plan",
      body: "Maintenance gets a seasonal rate. Builds get a layout, material selections and a fixed price.",
    },
    {
      title: "The work",
      body: "One crew and one supervisor for the whole job, working to a schedule you can hold us to.",
    },
    {
      title: "After",
      body: "A care sheet on handover, and the option to stay on a weekly or fortnightly programme so it keeps looking the way it did on day one.",
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
      body: "Water has to leave the property on purpose. Falls, drains and open joints are planned at the start, not solved after the stone is down.",
    },
    {
      title: "Edge restraint",
      body: "Paving spreads from the edges inward. Proper restraint and full depth cuts at every border are the reason a patio still lines up in year ten.",
    },
  ],
} as const;

export const pricing = {
  headline: "How the work is priced.",
  note: "Every property is quoted after a site visit. Access, grade and what is under the topsoil move the number more than square footage does.",
  buildsHeading: "Builds, priced by the job",
  seasonalHeading: "Maintenance, priced by the season",
  tiers: [
    {
      title: "Walkway, entry or small patio",
      range: "Quoted per job",
      body: "A single surface done properly. Excavation, base, edge restraint and the sod or planting that finishes it.",
      includes: ["Excavation and base", "Paving or slabs", "Edging and sod repair"],
    },
    {
      title: "Full yard makeover",
      range: "Quoted per job",
      body: "Grading, drainage, hardscape, planting and sod delivered as one build rather than in stages.",
      includes: [
        "Grading and drainage",
        "Patio, walkway and steps",
        "Beds, planting and sod",
        "Irrigation sleeving",
      ],
      featured: true,
    },
    {
      title: "Whole property programme",
      range: "Quoted per property",
      body: "Front and rear rebuilt together, phased across seasons, with irrigation and lighting run through the whole property.",
      includes: ["Multi phase schedule", "Front and rear", "Full irrigation", "Lighting"],
    },
  ],
  seasonal: [
    {
      title: "Lawn care",
      range: "Per visit",
      body: "Weekly cutting, trimming and blow down, on a fixed day by area.",
      includes: ["Weekly cut and trim", "Fertiliser programme", "Spring and autumn cleanup"],
    },
    {
      title: "Lawn and garden",
      range: "Per visit",
      body: "Everything in lawn care, plus the beds edged, weeded and kept in shape through the season.",
      includes: ["All of lawn care", "Bed edging and weeding", "Pruning and shaping", "Mulch top up"],
      featured: true,
    },
    {
      title: "Full property care",
      range: "Per season",
      body: "Lawn, beds, irrigation start up and blowout, and seasonal planting, on one schedule and one invoice.",
      includes: ["All of lawn and garden", "Irrigation service", "Seasonal planting", "Priority scheduling"],
    },
  ],
} as const;

export const consult = {
  headline: "Tell us about the property.",
  body: "Send the address and what you are hoping to change, and we will arrange a site visit. Build work is scheduled in order of booking, so earlier in the season is easier.",
  projectTypes: [
    "Weekly lawn care",
    "Garden maintenance",
    "Patio, walkway or steps",
    "Full yard makeover",
    "Irrigation",
    "Not sure yet",
  ],
  budgets: [
    "Maintenance, not a build",
    "Still working it out",
    "I have a figure in mind",
  ],
  timelines: ["This season", "Next season", "Planning ahead"],
} as const;

export const closing = {
  headline: "The best time to start is the season before you want to use it.",
  body: "Design and quoting take time, and build work is scheduled in order of booking. Starting in autumn is how a yard is finished by the following summer.",
  cta: { label: "Get a quote", href: "/contact" },
} as const;

export const footer = {
  blurb:
    "Full service landscaping for Hamilton and the surrounding areas. Design, hardscape, lawn care, irrigation and garden maintenance, from one crew.",
} as const;
