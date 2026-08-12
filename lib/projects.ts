import type { PhotoKey } from "@/lib/photos";

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  /** One line for the projects index. */
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  cover: PhotoKey;
  detail: PhotoKey;
  facts: readonly { label: string; value: string }[];
  /** Service slugs this project drew on. */
  services: readonly string[];
  metaDescription: string;
};

/**
 * TODO(client): these are written from typical work in the region and need to
 * be replaced with real jobs, real addresses at the level of a neighbourhood,
 * and real photography before publication.
 */
export const projects: readonly Project[] = [
  {
    slug: "ancaster-terraced-slope",
    title: "A sloped Ancaster lot, rebuilt as three level terraces",
    location: "Ancaster, Ontario",
    year: "2025",
    summary:
      "Almost three metres of fall from the house to the fence, turned into three usable levels.",
    problem:
      "The rear yard dropped close to three metres from the back door to the fence line and shed water straight into the neighbouring garden. The existing lawn was unusable on the slope and the lower third stayed wet into June.",
    approach:
      "We regraded the whole slope and held it with two dry laid armour stone walls, then cut the usable ground into three level terraces. A french drain along the low side takes roof and surface water to the street rather than across the property line.",
    outcome:
      "The middle terrace carries a fire table and seating, the upper sits directly off the kitchen, and the lower is planted rather than lawn. Two winters in, the walls have not moved and the low corner has stayed dry.",
    cover: "projectAncasterCover",
    detail: "projectAncasterDetail",
    facts: [
      { label: "Location", value: "Ancaster, Ontario" },
      { label: "Scope", value: "Regrading, armour stone, terraces, planting, lighting" },
      { label: "Completed", value: "Autumn 2025" },
      { label: "Build time", value: "Nine weeks" },
    ],
    services: ["landscape-design", "interlock-and-natural-stone", "planting-and-soil"],
    metaDescription:
      "How a three metre slope in Ancaster was regraded into three level terraces with armour stone retaining and a drainage line to the street.",
  },
  {
    slug: "burlington-pool-surround",
    title: "A Burlington pool surround that reads as garden",
    location: "Burlington, Ontario",
    year: "2025",
    summary: "Cut limestone decking, screened equipment and planting tight to the coping line.",
    problem:
      "A new pool had been installed with a plain concrete apron and no drainage away from the water. Every heavy rain washed silt from the surrounding beds straight into the pool, and the equipment pad was the first thing you saw from the house.",
    approach:
      "We lifted the apron, regraded the deck to fall away from the water on all four sides, and laid cut limestone with a full depth base. Beds were rebuilt behind a hidden edge so the soil sits below the deck line, and the equipment moved behind a planted screen.",
    outcome:
      "The pool now sits inside the garden rather than beside it. Cleaning time dropped sharply once the deck stopped draining inward, which was the whole point of the exercise.",
    cover: "projectBurlingtonCover",
    detail: "projectBurlingtonDetail",
    facts: [
      { label: "Location", value: "Burlington, Ontario" },
      { label: "Scope", value: "Pool decking, regrading, drainage, screening, planting" },
      { label: "Completed", value: "Summer 2025" },
      { label: "Build time", value: "Six weeks" },
    ],
    services: ["pools-and-water", "interlock-and-natural-stone", "planting-and-soil"],
    metaDescription:
      "A Burlington pool surround rebuilt in cut limestone with the deck regraded to fall away from the water and the equipment screened by planting.",
  },
  {
    slug: "dundas-narrow-garden",
    title: "A narrow Dundas garden, planted to feel wider",
    location: "Dundas, Ontario",
    year: "2024",
    summary: "A six metre wide lot where the walkway does the work and the planting does the rest.",
    problem:
      "Six metres wide, overlooked on both sides, and a cracked concrete path down the middle that made the garden read as a corridor. The owners wanted somewhere to sit that did not feel like a hallway.",
    approach:
      "The path was replaced with a wider walkway set off centre, which leaves one deep bed and one shallow one instead of two thin strips. Planting was layered by height along the long axis so the eye stops several times on the way down the garden.",
    outcome:
      "The garden is the same width and reads considerably wider. The off centre line is the single decision that does most of the work, and it cost nothing to make.",
    cover: "projectDundasCover",
    detail: "projectDundasDetail",
    facts: [
      { label: "Location", value: "Dundas, Ontario" },
      { label: "Scope", value: "Walkway, bed construction, layered planting, lighting" },
      { label: "Completed", value: "Spring 2024" },
      { label: "Build time", value: "Four weeks" },
    ],
    services: ["landscape-design", "planting-and-soil", "lighting-and-irrigation"],
    metaDescription:
      "A six metre wide Dundas garden reworked with an off centre walkway and layered planting so a narrow lot reads considerably wider.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
