import Link from "next/link";
import { ArrowUpRight, Check } from "@phosphor-icons/react/ssr";

import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/services";

/**
 * Bento grid, five cells for five services. Three cells carry photography and
 * two carry tone, so the grid does not read as a row of identical text cards.
 * Every cell is a link into the service page it describes.
 */

const media = {
  design: { height: "h-[260px] lg:h-[300px]", sizes: "(min-width: 1024px) 58vw, 100vw" },
  stone: { height: "h-[260px] lg:h-[300px]", sizes: "(min-width: 1024px) 40vw, 100vw" },
  water: { height: "h-[220px] lg:h-[240px]", sizes: "(min-width: 1024px) 40vw, 100vw" },
} as const;

/** The two typographic cells carry their specifics here instead of a void. */
function ServicePoints({ points }: { points: readonly string[] }) {
  return (
    <ul className="mt-auto flex flex-col gap-2 pt-4">
      {points.slice(0, 3).map((point) => (
        <li key={point} className="flex items-start gap-2.5 text-[14px] text-ink">
          <Check size={14} weight="bold" className="mt-1 shrink-0 text-accent" aria-hidden />
          {point}
        </li>
      ))}
    </ul>
  );
}

function CellHeading({ title, size }: { title: string; size: "small" | "large" }) {
  return (
    <h3
      className={
        size === "large"
          ? "display flex items-start justify-between gap-3 text-[26px] leading-[1.1] lg:text-[30px]"
          : "display-tight flex items-start justify-between gap-3 text-[22px]"
      }
    >
      {title}
      <ArrowUpRight
        size={size === "large" ? 20 : 17}
        weight="bold"
        aria-hidden
        className="mt-1 shrink-0 text-ink-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </h3>
  );
}

export function Services() {
  const [design, stone, water, planting, systems] = services;

  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="display max-w-[16ch] text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
            What we build.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:mt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" index={0}>
            <Link
              href={`/services/${design.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-edge border border-line transition-colors duration-200 hover:border-line-strong"
            >
              <div className={media.design.height}>
                <Photo slot={design.photo} fill bare sizes={media.design.sizes} />
              </div>
              <div className="flex flex-1 flex-col gap-3 border-t border-line p-6 lg:p-8">
                <CellHeading title={design.title} size="small" />
                <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">{design.summary}</p>
              </div>
            </Link>
          </Reveal>

          <Reveal className="lg:col-span-5" index={1}>
            <Link
              href={`/services/${stone.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-edge border border-line transition-colors duration-200 hover:border-line-strong"
            >
              <div className={media.stone.height}>
                <Photo slot={stone.photo} fill bare sizes={media.stone.sizes} />
              </div>
              <div className="flex flex-1 flex-col gap-3 border-t border-line p-6 lg:p-8">
                <CellHeading title={stone.title} size="small" />
                <p className="max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">{stone.summary}</p>
              </div>
            </Link>
          </Reveal>

          <Reveal className="lg:col-span-5" index={2}>
            <Link
              href={`/services/${water.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-edge border border-line transition-colors duration-200 hover:border-line-strong"
            >
              <div className={media.water.height}>
                <Photo slot={water.photo} fill bare sizes={media.water.sizes} />
              </div>
              <div className="flex flex-1 flex-col gap-3 border-t border-line p-6 lg:p-8">
                <CellHeading title={water.title} size="small" />
                <p className="max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">{water.summary}</p>
              </div>
            </Link>
          </Reveal>

          <Reveal className="lg:col-span-4" index={3}>
            <Link
              href={`/services/${planting.slug}`}
              className="group flex h-full flex-col gap-5 rounded-edge border border-line bg-tint p-6 transition-colors duration-200 hover:border-line-strong lg:p-8"
            >
              <CellHeading title={planting.title} size="large" />
              <p className="max-w-[40ch] text-[15px] leading-relaxed text-ink-muted">{planting.summary}</p>
              <ServicePoints points={planting.includes} />
            </Link>
          </Reveal>

          <Reveal className="lg:col-span-3" index={4}>
            <Link
              href={`/services/${systems.slug}`}
              className="group flex h-full flex-col gap-5 rounded-edge border border-line bg-surface-2 p-6 transition-colors duration-200 hover:border-line-strong lg:p-8"
            >
              <CellHeading title={systems.title} size="large" />
              <p className="max-w-[36ch] text-[15px] leading-relaxed text-ink-muted">{systems.summary}</p>
              <ServicePoints points={systems.includes} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
