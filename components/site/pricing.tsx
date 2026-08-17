import { Check } from "@phosphor-icons/react/ssr";

import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { nav, pricing } from "@/lib/content";

const spans = ["lg:col-span-4", "lg:col-span-5", "lg:col-span-3"];

type Tier = {
  title: string;
  range: string;
  body: string;
  includes: readonly string[];
  featured?: boolean;
};

function TierRow({ tiers, offset = 0 }: { tiers: readonly Tier[]; offset?: number }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12">
      {tiers.map((tier, i) => (
        <Reveal key={tier.title} index={i + offset} className={spans[i]}>
          <article
            className={`flex h-full flex-col gap-6 rounded-edge border p-6 lg:p-8 ${
              tier.featured ? "border-accent bg-bg" : "border-line bg-bg"
            }`}
          >
            <div>
              <h3 className="display-tight text-[20px]">{tier.title}</h3>
              <p className="display mt-3 text-[26px] lg:text-[30px]">{tier.range}</p>
            </div>

            <p className="text-[15px] leading-relaxed text-ink-muted">{tier.body}</p>

            <ul className="mt-auto flex flex-col gap-2.5">
              {tier.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink">
                  <Check size={15} weight="bold" className="mt-1 shrink-0 text-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="display max-w-[16ch] text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
            {pricing.headline}
          </h2>
          <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-ink-muted">
            {pricing.note}
          </p>
        </Reveal>

        <Reveal>
          <h3 className="display-tight mt-14 border-t border-line-strong pt-6 text-[18px]">
            {pricing.buildsHeading}
          </h3>
        </Reveal>
        <TierRow tiers={pricing.tiers} />

        <Reveal>
          <h3 className="display-tight mt-16 border-t border-line-strong pt-6 text-[18px]">
            {pricing.seasonalHeading}
          </h3>
        </Reveal>
        <TierRow tiers={pricing.seasonal} offset={1} />

        <Reveal index={2}>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <ButtonLink href={nav.cta.href}>{nav.cta.label}</ButtonLink>
            <p className="text-[14px] text-ink-muted">
              Site visits run Monday to Friday across the region.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
