import type { PhotoKey } from "@/lib/photos";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, used for schema and for the visible date. */
  published: string;
  updated?: string;
  author: string;
  authorRole: string;
  readingMinutes: number;
  cover: PhotoKey;
  /** Search result title, when the headline itself is too long for one. */
  metaTitle?: string;
  body: readonly { heading?: string; paragraphs: readonly string[] }[];
  metaDescription: string;
};

/** TODO(client): written as launch content. Replace or expand with real posts. */
export const posts: readonly Post[] = [
  {
    slug: "why-patios-fail-in-the-third-winter",
    title: "Why so many patios fail in their third winter",
    excerpt:
      "Freeze and thaw does not damage stone. It damages what is underneath it, and by the third season the evidence reaches the surface.",
    published: "2026-03-18",
    author: "Pure Oasis",
    authorRole: "Crew",
    readingMinutes: 6,
    cover: "postFreezeThaw",
    metaTitle: "Why Patios Fail in Their Third Winter",
    body: [
      {
        paragraphs: [
          "A patio laid in June looks the same in September no matter how it was built. The difference between good work and bad work in this region only shows once the ground has frozen and thawed a few times, which is why the third winter is when most people first call someone about a terrace they paid for four summers ago.",
          "The failure is almost never the paving. It is the base, the drainage, or the edge, and usually some combination of all three.",
        ],
      },
      {
        heading: "Water is the whole story",
        paragraphs: [
          "Freezing water expands by roughly nine percent. If there is water sitting in the base under your terrace when the ground freezes, the base lifts. When it thaws, it settles back, but not evenly and not to where it started. Repeat that thirty times a winter and the surface starts to tell you about it.",
          "This is why drainage is a structural question rather than a cosmetic one. A base built from clean angular aggregate that drains, over a subgrade that sheds water somewhere useful, has very little water in it to freeze.",
        ],
      },
      {
        heading: "Depth follows the soil, not a rule of thumb",
        paragraphs: [
          "Much of Hamilton and the surrounding townships sits on clay. Clay holds water, drains slowly and moves more than sand does. A base depth that is perfectly adequate on a sandy lot near the lake is not adequate on a clay lot up the escarpment, and the quote that names one number for every property has not looked at the property.",
          "Ask any contractor what is under the topsoil on your lot and how they know. The answer tells you a great deal about the rest of the quote.",
        ],
      },
      {
        heading: "The edges go first",
        paragraphs: [
          "Paving units spread outward from the perimeter under load. Without proper restraint and full depth cuts at every border, the outer course drifts, the joints open, sand washes out, and the drift moves inward one course at a time.",
          "Look at the edge of any tired terrace. The middle is usually fine. The failure started where nothing was holding it.",
        ],
      },
      {
        heading: "What to ask before you sign",
        paragraphs: [
          "Three questions separate most quotes. What is the base depth and why that number for this soil. Where does surface water go, specifically. What holds the edges, and are border cuts full depth.",
          "A contractor who answers those clearly is quoting a different piece of work than one who does not, even when the two prices look similar.",
        ],
      },
    ],
    metaDescription:
      "Freeze and thaw damages the base, the drainage and the edges rather than the stone. What causes patio failure in the Hamilton area, and what to ask before signing.",
  },
  {
    slug: "why-lawns-thin-out-every-august",
    title: "Why your lawn thins out every August, and what actually fixes it",
    excerpt:
      "Reseeding the same bare patch every spring treats the symptom. In this region the cause is almost always underneath the grass.",
    published: "2026-04-22",
    author: "Pure Oasis",
    authorRole: "Crew",
    readingMinutes: 5,
    cover: "postLawn",
    metaTitle: "Why Lawns Thin Out Every August",
    body: [
      {
        paragraphs: [
          "A lawn that looks good in May and thin by the middle of August is following a pattern, not having bad luck. The grass has not failed. The ground it is growing in has stopped being able to support it once the weather gets hard.",
          "Overseeding the same patch each spring is treating what you can see. The reason it comes back is a few inches lower.",
        ],
      },
      {
        heading: "Compaction is the usual culprit",
        paragraphs: [
          "Clay compacts, and most of this region is clay. Compacted soil has very little pore space, which means roots stay shallow and water runs off instead of soaking in. A shallow rooted lawn has no reserve when three hot weeks arrive.",
          "Core aeration pulls plugs out and gives the soil somewhere to expand into. Done once a year, usually in early autumn, it does more for a struggling lawn than any amount of seed.",
        ],
      },
      {
        heading: "Cutting height matters more than people expect",
        paragraphs: [
          "Grass cut short in July is grass with no shade over its own roots. The soil surface heats, moisture leaves, and the plant spends its energy regrowing leaf instead of pushing roots down.",
          "Raising the deck for the summer months keeps the ground cooler and the colour better, and it costs nothing.",
        ],
      },
      {
        heading: "Feeding on a schedule, not a whim",
        paragraphs: [
          "A lawn needs different things in April than it does in September. Early feeding pushes top growth, late season feeding builds the root reserve that carries it through the following summer.",
          "The autumn application is the one most homeowners skip and the one that changes next August.",
        ],
      },
      {
        heading: "When the answer really is new sod",
        paragraphs: [
          "Sometimes the soil profile is gone, usually on newer subdivision lots where construction stripped the topsoil and left compacted fill. No feeding programme fixes that.",
          "In that case the honest recommendation is to strip, bring in screened topsoil, grade properly and lay new sod, and then maintain it so the same thing does not happen again.",
        ],
      },
    ],
    metaDescription:
      "Thin summer lawns in the Hamilton area are usually a compaction problem, not a seed problem. Aeration, cutting height, feeding schedule and when new sod is the real answer.",
  },
  {
    slug: "what-a-landscape-build-actually-costs",
    title: "What a landscape build actually costs, and where the money goes",
    excerpt:
      "Most of the budget on a serious garden disappears before anything decorative arrives. Here is the honest breakdown.",
    published: "2026-05-14",
    author: "Pure Oasis",
    authorRole: "Crew",
    readingMinutes: 7,
    cover: "postBudget",
    metaTitle: "What a Landscape Build Actually Costs",
    body: [
      {
        paragraphs: [
          "The most common surprise in a first consultation is not the total. It is the split. People expect the money to be in the visible things, the stone and the plants, and are startled to learn how much of it goes into ground they will never see again.",
          "That split is also the clearest signal of whether a quote is realistic.",
        ],
      },
      {
        heading: "Excavation and disposal",
        paragraphs: [
          "Before anything is built, material has to come out and go somewhere. On a sloped or landlocked lot with no rear access, this line alone can be a quarter of the budget, because everything moves by machine that fits down a side yard or by hand.",
          "Access is the single biggest variable between two otherwise identical gardens.",
        ],
      },
      {
        heading: "Base and drainage",
        paragraphs: [
          "Aggregate, compaction, drains and sleeving typically account for more of the cost than the surface material. This is the part that decides whether the garden is still level in ten years, and the part that is easiest for a competing quote to quietly reduce.",
          "If one price is meaningfully lower than the others, this is almost always where the difference lives.",
        ],
      },
      {
        heading: "Surface, planting and systems",
        paragraphs: [
          "Stone, planting, lighting and irrigation are the visible spend and the easiest to phase. A common approach is to build the structure and the drainage in one season and add planting and lighting in the next, which spreads cost without compromising anything that would be expensive to revisit.",
          "What should not be phased is anything that runs under a hard surface. Sleeving costs very little during the build and a great deal afterwards.",
        ],
      },
      {
        heading: "Ranges worth planning around",
        paragraphs: [
          "The honest answer to what a build costs is that it depends on access, on grade, and on what is under the topsoil, and that any of the three can move the number more than the size of the yard does. A quote given over the phone before someone has stood on the property is a guess.",
          "What is worth asking any contractor for is the split. If the base and drainage line is thin relative to the surface, the price is low because the part you cannot see was reduced.",
        ],
      },
    ],
    metaDescription:
      "Where the budget actually goes on a landscape build: excavation and access, base and drainage, then the visible surfaces. Planning ranges for the Hamilton and Burlington area.",
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
