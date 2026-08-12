import { ArrowRight } from "@phosphor-icons/react/ssr";

import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { business, closing } from "@/lib/content";

/**
 * Closing band. Three frames stepped against a single argument about timing,
 * which is the one thing that actually moves a landscape enquiry forward.
 */
export function ClosingBand() {
  return (
    <section aria-label="Book a consult" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="display max-w-[16ch] text-[2rem] leading-[1.08] sm:text-[2.4rem] lg:text-[2.9rem]">
                {closing.headline}
              </h2>
              <p className="mt-7 max-w-[50ch] text-[16px] leading-relaxed text-ink-muted sm:text-[17px]">
                {closing.body}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={closing.cta.href}>
                  {closing.cta.label}
                  <ArrowRight size={17} weight="bold" aria-hidden />
                </ButtonLink>
                <a
                  href={business.phoneHref}
                  className="inline-flex h-12 items-center px-1 text-[15px] font-semibold text-ink underline underline-offset-4 transition-colors duration-200 hover:text-accent"
                >
                  {business.phone}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-5 gap-3 lg:col-span-6 lg:col-start-7">
            <Reveal className="col-span-3" index={1}>
              <Photo slot="ctaLead" sizes="(min-width: 1024px) 28vw, 60vw" />
            </Reveal>
            <Reveal className="col-span-2 lg:mt-10" index={2}>
              <Photo slot="ctaSecond" sizes="(min-width: 1024px) 18vw, 40vw" />
            </Reveal>
            <Reveal className="col-span-2 col-start-2" index={3}>
              <Photo slot="ctaThird" sizes="(min-width: 1024px) 18vw, 40vw" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
