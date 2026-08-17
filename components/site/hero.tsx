import { ArrowRight } from "@phosphor-icons/react/ssr";

import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { HeroEnter } from "@/components/ui/reveal";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      {/* Height excludes the sticky header so the whole hero, CTAs included, sits in the first screen. */}
      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[1400px] grid-cols-1 items-center gap-10 px-5 pt-14 pb-12 sm:px-8 lg:min-h-[calc(100dvh-4.5rem)] lg:grid-cols-12 lg:gap-14 lg:pt-16 lg:pb-16">
        <div className="lg:col-span-7">
          <HeroEnter index={0}>
            <p className="eyebrow">{hero.eyebrow}</p>
          </HeroEnter>

          <HeroEnter index={1}>
            <h1 className="display mt-6 text-balance text-[2.25rem] leading-[1.06] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.6rem]">
              {hero.headline}
            </h1>
          </HeroEnter>

          <HeroEnter index={2}>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-ink-muted sm:text-[17px]">
              {hero.sub}
            </p>
          </HeroEnter>

          <HeroEnter index={3}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={hero.primary.href}>
                {hero.primary.label}
                <ArrowRight size={17} weight="bold" aria-hidden />
              </ButtonLink>
              <ButtonLink href={hero.secondary.href} variant="outline">
                {hero.secondary.label}
              </ButtonLink>
            </div>
          </HeroEnter>
        </div>

        <div className="h-[32vh] min-h-[220px] lg:col-span-5 lg:mt-8 lg:h-[min(76vh,720px)]">
          <HeroEnter index={2} className="h-full">
            <Photo
              slot="patioSlabsPortrait"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-full"
            />
          </HeroEnter>
        </div>
      </div>
    </section>
  );
}
