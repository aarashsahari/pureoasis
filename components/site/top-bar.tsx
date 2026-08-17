import { EnvelopeSimple, MapPin } from "@phosphor-icons/react/ssr";

import { business } from "@/lib/content";

export function TopBar() {
  return (
    <div className="hidden border-b border-line bg-surface lg:block">
      <div className="mx-auto flex h-10 max-w-[1400px] items-center justify-between gap-6 px-5 text-[13px] text-ink-muted sm:px-8">
        <div className="flex items-center gap-7">
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} weight="light" aria-hidden />
            {business.locality}, {business.region}
          </span>
          <a
            href={`mailto:${business.email}`}
            className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-ink"
          >
            <EnvelopeSimple size={14} weight="light" aria-hidden />
            {business.email}
          </a>
        </div>
      </div>
    </div>
  );
}
