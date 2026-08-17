import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/lib/content";

export function StatsBand() {
  return (
    <section aria-label="The practice in numbers" className="border-b border-line bg-surface-2">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-20">
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line-strong">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              index={i}
              className={i === 0 ? "lg:pr-8" : i === stats.length - 1 ? "lg:pl-8" : "lg:px-8"}
            >
              <div>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="display block text-[2.6rem] leading-none lg:text-[3.1rem]">
                    {stat.value}
                  </span>
                  <span className="mt-4 block max-w-[26ch] text-[14px] leading-relaxed text-ink-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
