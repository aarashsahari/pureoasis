import { Reveal } from "@/components/ui/reveal";
import { process } from "@/lib/content";

/**
 * Four stages of a build. Scroll snapped on small screens so each stage gets
 * the full width, four columns from lg up. Each column is topped with a rule
 * that organises the copy underneath it rather than decorating the section.
 */
export function Process() {
  return (
    <section id="process" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="display max-w-[14ch] text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
            {process.headline}
          </h2>
        </Reveal>

        <ol className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:pb-0">
          {process.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              index={i}
              className="w-[78vw] shrink-0 snap-start border-t border-line-strong pt-6 sm:w-[46vw] lg:w-auto"
            >
              <h3 className="display-tight text-[24px] lg:text-[26px]">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
