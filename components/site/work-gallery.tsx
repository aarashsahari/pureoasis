import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import type { PhotoKey } from "@/lib/photos";

/**
 * Gallery of work, on the projects page rather than a route of its own.
 *
 * For a landscaping business the gallery and the project list are the same
 * thing in a visitor's head, so splitting them across two pages would just
 * make people choose between identical options. Sizes are mixed so the grid
 * has rhythm rather than reading as a contact sheet.
 */
const gallery: { slot: PhotoKey; span: string; height: string }[] = [
  { slot: "patioSlabs", span: "lg:col-span-5", height: "h-[280px] lg:h-[340px]" },
  { slot: "frontLawnStriped", span: "lg:col-span-4", height: "h-[280px] lg:h-[340px]" },
  { slot: "sideYardAfter", span: "lg:col-span-3", height: "h-[280px] lg:h-[340px]" },
  { slot: "frontEntryStone", span: "lg:col-span-4", height: "h-[280px] lg:h-[300px]" },
  { slot: "backyardDetail", span: "lg:col-span-3", height: "h-[280px] lg:h-[300px]" },
  { slot: "serviceGarden", span: "lg:col-span-5", height: "h-[280px] lg:h-[300px]" },
];

export function WorkGallery() {
  return (
    <section aria-label="Gallery" className="border-b border-line bg-surface-2">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="display max-w-[18ch] text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
            More of the work.
          </h2>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12">
          {gallery.map((item, i) => (
            <Reveal as="li" key={item.slot} index={i % 3} className={item.span}>
              <div className={item.height}>
                <Photo slot={item.slot} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
