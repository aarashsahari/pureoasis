import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { project } from "@/lib/content";

/**
 * One project, shown properly. A wide establishing frame carries the whole
 * yard, then the detail frame and the write up explain what was actually
 * solved, which is what a homeowner comparing quotes is reading for.
 */
export function FeaturedProject() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">{project.eyebrow}</p>
          <h2 className="display mt-5 max-w-[20ch] text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
            {project.title}
          </h2>
        </Reveal>

        <Reveal index={1}>
          <Photo
            slot="projectLead"
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="mt-10 lg:mt-14"
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5" index={0}>
            <Photo slot="projectDetail" sizes="(min-width: 1024px) 40vw, 100vw" />
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal index={1}>
              <p className="text-[16px] leading-relaxed text-ink-muted sm:text-[17px]">
                {project.body}
              </p>
            </Reveal>

            <Reveal index={2}>
              <dl className="mt-8 divide-y divide-line border-t border-line">
                {project.facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8">
                    <dt className="w-32 shrink-0 text-[13px] text-ink-muted">{fact.label}</dt>
                    <dd className="text-[15px] text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
