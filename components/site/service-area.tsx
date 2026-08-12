import { business, claims } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

/**
 * Service area and credentials band. Sits directly under the hero rather than
 * inside it, and carries the two questions every enquiry starts with: do you
 * come here, and are you covered.
 */
export function ServiceArea() {
  return (
    <section aria-label="Service area and coverage" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 lg:py-14">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-baseline lg:gap-14">
            <h2 className="shrink-0 text-[14px] font-semibold tracking-[-0.01em] text-ink">
              Where we work
            </h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {business.serviceArea.map((place) => (
                <li key={place} className="text-[15px] text-ink-muted">
                  {place}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal index={1}>
          <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3 sm:gap-10">
            {claims.map((claim) => (
              <div key={claim.label}>
                <dt className="text-[13px] text-ink-muted">{claim.label}</dt>
                <dd className="display-tight mt-1 text-[19px] text-ink">{claim.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
