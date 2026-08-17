import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";

import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { beforeAfterProject } from "@/lib/projects";

export function BeforeAfter() {
  const project = beforeAfterProject;
  if (!project?.beforeAfter) return null;

  return (
    <section aria-label="Before and after" className="border-b border-line bg-surface-2">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display max-w-[20ch] text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
              The same side yard, one week apart.
            </h2>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-ink underline underline-offset-4 transition-colors duration-200 hover:text-accent"
            >
              How it was done
              <ArrowRight size={16} weight="bold" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          <Reveal index={0}>
            <figure>
              <Photo slot={project.beforeAfter.before} sizes="(min-width: 1024px) 46vw, 100vw" />
              <figcaption className="mt-4 flex items-baseline gap-3">
                <span className="display-tight text-[17px] text-ink-muted">Before</span>
                <span className="text-[14px] text-ink-muted">
                  Thin grass, failing raised beds, gravel spreading into everything.
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal index={1}>
            <figure>
              <Photo slot={project.beforeAfter.after} sizes="(min-width: 1024px) 46vw, 100vw" />
              <figcaption className="mt-4 flex items-baseline gap-3">
                <span className="display-tight text-[17px] text-ink">After</span>
                <span className="text-[14px] text-ink-muted">
                  Regraded, stepping stones set in black stone, new sod to the garage.
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
