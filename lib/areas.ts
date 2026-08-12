export type Area = {
  slug: string;
  city: string;
  /** Shown as the page lead. Each area page says something true about that place. */
  intro: string;
  /** The local condition that changes how we build there. */
  ground: string;
  neighbourhoods: readonly string[];
  typicalWork: readonly string[];
  metaDescription: string;
};

/**
 * Area pages exist because the ground genuinely differs across the region and
 * that changes the build. They are not duplicated copy with a place name
 * swapped in, and they should not become that.
 */
export const areas: readonly Area[] = [
  {
    slug: "hamilton",
    city: "Hamilton",
    intro:
      "Hamilton covers everything from tight downtown lots to postwar suburbs and escarpment properties, and almost none of it shares a soil profile.",
    ground:
      "Above the escarpment the subsoil is generally heavy clay that holds water and moves with frost. Below it, closer to the bay, lots are more variable and often carry fill from earlier construction. Both need testing rather than assumption.",
    neighbourhoods: ["Durand", "Westdale", "Kirkendall", "Stoney Creek Mountain", "Rosedale"],
    typicalWork: [
      "Rear garden rebuilds on narrow city lots",
      "Retaining and level changes on escarpment properties",
      "Front entries and driveway replacement",
    ],
    metaDescription:
      "Landscape design and construction across Hamilton, from downtown lots to escarpment properties. Terraces, grading, drainage, planting and lighting.",
  },
  {
    slug: "burlington",
    city: "Burlington",
    intro:
      "Burlington properties tend to be wider and flatter than Hamilton's, which changes what the garden has to do rather than making it easier.",
    ground:
      "Sandier soil closer to the lake drains faster and needs a different irrigation strategy than the clay further north. Wind off the water is a real constraint on exposed lots, particularly for broadleaf evergreens.",
    neighbourhoods: ["Roseland", "Shoreacres", "Aldershot", "Tyandaga", "Millcroft"],
    typicalWork: [
      "Pool surrounds and deck regrading",
      "Full rear garden builds",
      "Screening and windbreak planting on exposed lots",
    ],
    metaDescription:
      "Landscape design and build in Burlington. Pool surrounds, terraces, drainage and planting for lakeside and north Burlington properties.",
  },
  {
    slug: "ancaster",
    city: "Ancaster",
    intro:
      "Ancaster lots are frequently large, frequently sloped, and frequently sitting on ground that moves more than the owners expect.",
    ground:
      "Clay is common and slopes are common, which is the combination most likely to produce drainage problems at a property line. Retaining work here has to be engineered for saturated soil, not dry soil.",
    neighbourhoods: ["Ancaster Village", "Meadowlands", "Oakhill", "Sulphur Springs"],
    typicalWork: [
      "Terracing and armour stone retaining",
      "Regrading to resolve neighbour drainage",
      "Estate scale planting programs",
    ],
    metaDescription:
      "Landscape design and construction in Ancaster. Terracing, armour stone retaining and drainage for sloped properties on clay soil.",
  },
  {
    slug: "dundas",
    city: "Dundas",
    intro:
      "Dundas has a high proportion of older housing stock on narrow lots, where the constraint is usually access rather than area.",
    ground:
      "Valley properties sit lower and stay wetter, and many gardens back onto conservation land, which limits what can be planted and where water can be sent.",
    neighbourhoods: ["Dundas Driving Park", "Pleasant Valley", "University Gardens"],
    typicalWork: [
      "Narrow lot gardens and walkways",
      "Hand dug work where machine access is impossible",
      "Planting to suit shaded valley conditions",
    ],
    metaDescription:
      "Landscape design and build in Dundas. Narrow lot gardens, restricted access builds and planting suited to shaded valley conditions.",
  },
  {
    slug: "oakville",
    city: "Oakville",
    intro:
      "Oakville work tends to be finish driven. The tolerances people expect on hard landscape here are tighter than anywhere else we build.",
    ground:
      "Mature tree cover on older streets is the dominant constraint. Root protection zones decide where a terrace can go long before aesthetics do.",
    neighbourhoods: ["Old Oakville", "Morrison", "Bronte", "Joshua Creek"],
    typicalWork: [
      "Cut stone terraces and entries",
      "Building around protected mature trees",
      "Lighting and irrigation retrofits",
    ],
    metaDescription:
      "Landscape design and construction in Oakville. Cut stone terraces, root sensitive builds around mature trees, lighting and irrigation.",
  },
  {
    slug: "stoney-creek",
    city: "Stoney Creek",
    intro:
      "Stoney Creek splits sharply between the older lakeside grid and newer mountain subdivisions, and the two need different approaches.",
    ground:
      "Newer subdivisions above the escarpment are often built on compacted fill with very little topsoil left. Rebuilding the soil profile is usually the first real task in the garden.",
    neighbourhoods: ["Winona", "Fifty Point", "Heritage Green", "Felker's Falls"],
    typicalWork: [
      "Soil rebuilds on new subdivision lots",
      "Rear garden builds from bare ground",
      "Fencing, screening and windbreaks",
    ],
    metaDescription:
      "Landscape design and build in Stoney Creek. Soil rebuilds on new subdivision lots, rear garden construction, planting and screening.",
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
