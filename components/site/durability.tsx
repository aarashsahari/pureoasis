import { Reveal } from "@/components/ui/reveal";
import { durability } from "@/lib/content";

/**
 * The technical argument, laid out as a descent. Each point steps further
 * across the grid than the one above it, which gives the section its own
 * shape and keeps it from reading as another three column feature row.
 */
const offsets = ["lg:col-span-7 lg:col-start-1", "lg:col-span-7 lg:col-start-3", "lg:col-span-7 lg:col-start-5"];

export function Durability() {
  return (
    <section aria-label="How we build for freeze and thaw" className="border-b border-line bg-surface-2">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="display max-w-[18ch] text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
            {durability.headline}
          </h2>
          <p className="mt-6 max-w-[56ch] text-[16px] leading-relaxed text-ink-muted sm:text-[17px]">
            {durability.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-y-16">
          {durability.points.map((point, i) => (
            <Reveal key={point.title} index={i} className={offsets[i]}>
              <div className="border-t border-line-strong pt-6">
                <h3 className="display text-[26px] lg:text-[32px]">{point.title}</h3>
                <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-ink-muted sm:text-[16px]">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
