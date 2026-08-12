import { Check } from "@phosphor-icons/react/ssr";

import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/content";

/**
 * Bento grid, five cells for five services. Three cells carry photography and
 * two carry tone, so the grid does not read as a row of identical text cards.
 */

const media = {
  design: { slot: "serviceDesign", height: "h-[260px] lg:h-[300px]", sizes: "(min-width: 1024px) 58vw, 100vw" },
  stone: { slot: "serviceStone", height: "h-[260px] lg:h-[300px]", sizes: "(min-width: 1024px) 40vw, 100vw" },
  water: { slot: "serviceWater", height: "h-[220px] lg:h-[240px]", sizes: "(min-width: 1024px) 40vw, 100vw" },
} as const;

/** The two typographic cells carry their specifics here instead of a void. */
function ServicePoints({ points }: { points: readonly string[] }) {
  return (
    <ul className="mt-auto flex flex-col gap-2 pt-4">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-2.5 text-[14px] text-ink">
          <Check size={14} weight="bold" className="mt-1 shrink-0 text-accent" aria-hidden />
          {point}
        </li>
      ))}
    </ul>
  );
}

export function Services() {
  const [design, stone, water, planting, systems] = services.items;

  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="display max-w-[16ch] text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
            {services.headline}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:mt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" index={0}>
            <article className="flex h-full flex-col overflow-hidden rounded-edge border border-line">
              <div className={media.design.height}>
                <Photo slot={media.design.slot} fill bare sizes={media.design.sizes} />
              </div>
              <div className="flex flex-1 flex-col gap-3 border-t border-line p-6 lg:p-8">
                <h3 className="display-tight text-[22px]">{design.title}</h3>
                <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">{design.body}</p>
              </div>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-5" index={1}>
            <article className="flex h-full flex-col overflow-hidden rounded-edge border border-line">
              <div className={media.stone.height}>
                <Photo slot={media.stone.slot} fill bare sizes={media.stone.sizes} />
              </div>
              <div className="flex flex-1 flex-col gap-3 border-t border-line p-6 lg:p-8">
                <h3 className="display-tight text-[22px]">{stone.title}</h3>
                <p className="max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">{stone.body}</p>
              </div>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-5" index={2}>
            <article className="flex h-full flex-col overflow-hidden rounded-edge border border-line">
              <div className={media.water.height}>
                <Photo slot={media.water.slot} fill bare sizes={media.water.sizes} />
              </div>
              <div className="flex flex-1 flex-col gap-3 border-t border-line p-6 lg:p-8">
                <h3 className="display-tight text-[22px]">{water.title}</h3>
                <p className="max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">{water.body}</p>
              </div>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-4" index={3}>
            <article className="flex h-full flex-col gap-5 rounded-edge border border-line bg-tint p-6 lg:p-8">
              <h3 className="display text-[26px] leading-[1.1] lg:text-[30px]">{planting.title}</h3>
              <p className="max-w-[40ch] text-[15px] leading-relaxed text-ink-muted">{planting.body}</p>
              <ServicePoints points={planting.points} />
            </article>
          </Reveal>

          <Reveal className="lg:col-span-3" index={4}>
            <article className="flex h-full flex-col gap-5 rounded-edge border border-line bg-surface-2 p-6 lg:p-8">
              <h3 className="display text-[26px] leading-[1.1] lg:text-[30px]">{systems.title}</h3>
              <p className="max-w-[36ch] text-[15px] leading-relaxed text-ink-muted">{systems.body}</p>
              <ServicePoints points={systems.points} />
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
