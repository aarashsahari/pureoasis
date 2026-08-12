import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";

import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { about } from "@/lib/content";

/**
 * About teaser. Three frames at three different sizes, stepped so the cluster
 * reads as a set of site photographs rather than a tidy gallery row, with the
 * argument for the practice beside it.
 */
export function AboutTeaser() {
  return (
    <section aria-label="About Pure Oasis" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="grid grid-cols-5 gap-3">
              <Reveal className="col-span-5">
                <Photo slot="aboutLead" sizes="(min-width: 1024px) 46vw, 100vw" />
              </Reveal>
              <Reveal className="col-span-2" index={1}>
                <Photo slot="aboutDetail" sizes="(min-width: 1024px) 18vw, 40vw" />
              </Reveal>
              <Reveal className="col-span-3 lg:mt-8" index={2}>
                <Photo slot="aboutYard" sizes="(min-width: 1024px) 28vw, 60vw" />
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:self-center">
            <Reveal index={1}>
              <h2 className="display max-w-[18ch] text-[2rem] leading-[1.08] sm:text-[2.4rem] lg:text-[2.8rem]">
                {about.teaserHeadline}
              </h2>
              <p className="mt-7 max-w-[54ch] text-[16px] leading-relaxed text-ink-muted sm:text-[17px]">
                {about.teaserBody}
              </p>
              <Link
                href={about.teaserLink.href}
                className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-ink underline underline-offset-4 transition-colors duration-200 hover:text-accent"
              >
                {about.teaserLink.label}
                <ArrowRight size={16} weight="bold" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
