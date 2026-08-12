import { Check } from "@phosphor-icons/react/ssr";

import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { nav, pricing } from "@/lib/content";

/**
 * Budget ranges, published on purpose. Most enquiries in this market stall
 * because nobody will name a number first.
 *
 * The three tiers are deliberately unequal in width so the row does not read
 * as a generic three card feature strip. The middle tier is the one most
 * projects land in, and it is the widest.
 */
const spans = ["lg:col-span-4", "lg:col-span-5", "lg:col-span-3"];

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

        <div className="mt-12 grid grid-cols-1 gap-4 lg:mt-16 lg:grid-cols-12">
          {pricing.tiers.map((tier, i) => (
            <Reveal key={tier.title} index={i} className={spans[i]}>
              <article
                className={`flex h-full flex-col gap-6 rounded-edge border p-6 lg:p-8 ${
                  "featured" in tier && tier.featured
                    ? "border-accent bg-bg"
                    : "border-line bg-bg"
                }`}
              >
                <div>
                  <h3 className="display-tight text-[20px]">{tier.title}</h3>
                  <p className="display mt-3 text-[28px] lg:text-[32px]">{tier.range}</p>
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

        <Reveal index={3}>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <ButtonLink href={nav.cta.href}>{nav.cta.label}</ButtonLink>
            <p className="text-[14px] text-ink-muted">
              Walkthroughs run Monday to Friday across the region.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
