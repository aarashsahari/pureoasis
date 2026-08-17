import { EnvelopeSimple, Phone } from "@phosphor-icons/react/ssr";

import { ConsultForm } from "@/components/site/consult-form";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { business } from "@/lib/content";

export function Consult() {
  return (
    <section id="consult" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <ConsultForm />
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal index={1}>
              <Photo slot="contactSide" sizes="(min-width: 1024px) 32vw, 100vw" />
            </Reveal>

            <Reveal index={2}>
              <div className="mt-8 flex flex-col gap-5 border-t border-line pt-8">
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-3 text-[16px] text-ink transition-colors duration-200 hover:text-accent"
                >
                  <Phone size={18} weight="light" aria-hidden />
                  {business.phone}
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 text-[16px] text-ink transition-colors duration-200 hover:text-accent"
                >
                  <EnvelopeSimple size={18} weight="light" aria-hidden />
                  {business.email}
                </a>

                <dl className="mt-2 flex flex-col gap-2">
                  {business.hours.map((entry) => (
                    <div key={entry.days} className="flex justify-between gap-6 text-[14px]">
                      <dt className="text-ink-muted">{entry.days}</dt>
                      <dd className="text-ink">{entry.time}</dd>
                    </div>
                  ))}
                </dl>

                <address className="mt-4 border-t border-line pt-5 text-[14px] leading-relaxed text-ink-muted not-italic">
                  {business.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
