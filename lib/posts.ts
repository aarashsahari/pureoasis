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
    author: "Renata Ilić",
    authorRole: "Design lead",
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
    slug: "planting-for-southern-ontario-exposure",
    title: "Planting for the exposure you have, not the one on the label",
    excerpt:
      "Two gardens ten minutes apart can be different growing environments. Reading your own site is worth more than any plant list.",
    published: "2026-04-22",
    author: "Renata Ilić",
    authorRole: "Design lead",
    readingMinutes: 5,
    cover: "postNativePlanting",
    metaTitle: "Planting for Your Real Garden Exposure",
    body: [
      {
        paragraphs: [
          "Plant tags describe conditions in general terms. Full sun, part shade, moist but well drained. None of that accounts for a south facing brick wall that radiates heat until midnight, or a north side that never dries out because the neighbour's maple takes the light and the roof takes the rain.",
          "Before choosing anything, it is worth spending a season noticing what your garden actually does.",
        ],
      },
      {
        heading: "Light changes through the day and the year",
        paragraphs: [
          "A bed that gets six hours in July may get ninety minutes in October once the sun sits lower and the fence throws a longer shadow. Walk the garden at three or four points in a day and note where the light lands, then do it again in a different season.",
          "Most disappointing planting in this region is a light problem, not a plant problem.",
        ],
      },
      {
        heading: "Wind and salt are real constraints",
        paragraphs: [
          "Exposed lots on the escarpment take wind that will dry out broadleaf evergreens by February. Anything within a few metres of a road or a salted walkway is in a different chemical environment than the rest of the garden.",
          "These are solvable conditions once acknowledged. They are not solvable by choosing a plant that likes the idea of the site.",
        ],
      },
      {
        heading: "Natives, but for the right reason",
        paragraphs: [
          "Native species tend to perform because they evolved in these conditions, not because of the label. A mixed list of natives and well adapted introductions usually gives a longer season of interest and a more resilient garden than a purist approach in either direction.",
          "The test is the same for every plant. Does it want what this specific piece of ground is offering.",
        ],
      },
    ],
    metaDescription:
      "How to read light, wind and soil on your own property before choosing plants, and why two southern Ontario gardens ten minutes apart can need different lists.",
  },
  {
    slug: "what-a-landscape-build-actually-costs",
    title: "What a landscape build actually costs, and where the money goes",
    excerpt:
      "Most of the budget on a serious garden disappears before anything decorative arrives. Here is the honest breakdown.",
    published: "2026-05-14",
    author: "Marcus Adeyemi",
    authorRole: "Site supervisor",
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
          "For this region, a front garden and entry refresh usually runs from the high teens to the mid forties. A full rear garden build including grading, drainage, terrace, planting and lighting more often sits between sixty and a hundred and eighty thousand. Larger properties with pool surrounds and structures go beyond that.",
          "Those are planning numbers, not quotes. A fixed price only follows a survey and a drawing.",
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
