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
  /** Set on the one project that has a matched before and after pair. */
  beforeAfter?: { before: PhotoKey; after: PhotoKey };
  facts: readonly { label: string; value: string }[];
  /** Service slugs this project drew on. */
  services: readonly string[];
  metaDescription: string;
};

export const projects: readonly Project[] = [
  {
    slug: "side-yard-transformation",
    title: "A dead side yard turned into the way into the garden",
    location: "Hamilton, Ontario",
    year: "2025",
    summary:
      "Patchy grass, tired raised beds and loose gravel, replaced with a stepping stone run and new sod.",
    problem:
      "The strip between the house and the garage was doing nothing. Thin grass that never got enough light, a run of timber raised beds well past their life, and loose gravel spreading into everything around it. It was the route everyone took to the back gate and nobody wanted to look at it.",
    approach:
      "We cleared the beds and the old gravel, regraded the strip so water runs away from the garage instead of sitting against it, and set square stepping stones into a bed of black stone along the fence line. The open half was levelled and sodded so the space reads as garden rather than as a gap between two buildings.",
    outcome:
      "The path takes the traffic, so the new sod is not being walked into mud by August. The stone strip also gives the fence line something to sit against, which is why the yard now looks intentional from the gate.",
    cover: "sideYardAfter",
    detail: "sideYardDetail",
    beforeAfter: { before: "sideYardBefore", after: "sideYardAfter" },
    facts: [
      { label: "Location", value: "Hamilton, Ontario" },
      { label: "Scope", value: "Clearance, regrading, stepping stones, decorative stone, sod" },
      { label: "Completed", value: "2025" },
      { label: "Build time", value: "Under a week" },
    ],
    services: ["hardscape-and-interlock", "lawn-care", "landscape-design"],
    metaDescription:
      "A narrow Hamilton side yard cleared of failing raised beds and loose gravel, regraded, and rebuilt with stepping stones set in black stone and new sod.",
  },
  {
    slug: "slab-patio-and-sod",
    title: "A rear yard patio in large format slabs",
    location: "Hamilton, Ontario",
    year: "2025",
    summary:
      "Large format slabs set with black stone joints, running to a clean sod edge along the fence.",
    problem:
      "The rear yard was small, entirely enclosed by fence, and had no usable surface. Anything laid there had to make the space feel larger rather than fill it, and it had to drain, because there was nowhere obvious for water to go.",
    approach:
      "Large format slabs were set on a compacted base with black stone joints, which lets water through the surface instead of running it to one corner. Laying the slabs on a consistent grid and running them corner to corner makes the yard read wider than it is. The remaining ground was levelled and sodded to a straight edge.",
    outcome:
      "The whole yard is now usable, and the open joints mean it drains where it falls. The straight line between stone and sod is what keeps a small space looking deliberate.",
    cover: "backyardCover",
    detail: "patioSlabs",
    facts: [
      { label: "Location", value: "Hamilton, Ontario" },
      { label: "Scope", value: "Excavation, base, slab patio, decorative stone joints, sod" },
      { label: "Completed", value: "2025" },
      { label: "Build time", value: "Under two weeks" },
    ],
    services: ["hardscape-and-interlock", "lawn-care"],
    metaDescription:
      "A small Hamilton rear yard rebuilt with large format slabs set on black stone joints for drainage, finished with new sod to a straight edge.",
  },
  {
    slug: "front-entry-and-beds",
    title: "A front entry rebuilt around the walk to the door",
    location: "Hamilton, Ontario",
    year: "2025",
    summary:
      "Stamped concrete, a stone inlay, lit beds and a lawn kept on a weekly programme.",
    problem:
      "The front of the house was the part everyone saw and the part nobody had touched. The approach to the door was plain, the beds along the house had lost their edge, and there was no light on the walk after dark.",
    approach:
      "The walkway was laid in stamped concrete with a black stone inlay running through it, which breaks up the surface and gives the beds something to answer to. Beds were rebuilt, edged and mulched, planted with hostas and flowering shrubs, and lit with inground fixtures set flush into the walk.",
    outcome:
      "The entry now works after dark, which is when most people arrive. The lawn and the beds are kept on a maintenance programme, so the edge that makes it look finished stays cut all season.",
    cover: "frontEntryCover",
    detail: "frontEntryDetail",
    facts: [
      { label: "Location", value: "Hamilton, Ontario" },
      { label: "Scope", value: "Stamped concrete, stone inlay, bed construction, planting, lighting" },
      { label: "Completed", value: "2025" },
      { label: "Maintained since", value: "Weekly through the season" },
    ],
    services: ["hardscape-and-interlock", "garden-maintenance", "lawn-care"],
    metaDescription:
      "A Hamilton front entry rebuilt with a stamped concrete walkway, black stone inlay, replanted and lit beds, and a lawn kept on a weekly programme.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const beforeAfterProject = projects.find((project) => project.beforeAfter);
