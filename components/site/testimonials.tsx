import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/content";

/** Three short quotes, separated by rules rather than boxed into cards. */
const columnPadding = ["lg:pr-10", "lg:px-10", "lg:pl-10"];

export function Testimonials() {
  return (
    <section aria-label="What homeowners say" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="display max-w-[18ch] text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
            {testimonials.headline}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-line">
          {testimonials.items.map((item, i) => (
            <Reveal key={item.name} index={i} className={columnPadding[i]}>
              <figure className="flex h-full flex-col justify-between gap-8 border-t border-line-strong pt-6 lg:border-t-0 lg:pt-0">
                <blockquote className="display-tight text-[19px] leading-[1.45] text-ink lg:text-[21px]">
                  {item.quote}
                </blockquote>
                <figcaption className="text-[14px] text-ink-muted">
                  <span className="text-ink">{item.name}</span>
                  <br />
                  {item.place}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
