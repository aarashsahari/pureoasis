import { business, footer } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-2 lg:col-span-5">
            <p className="display-tight text-[17px] uppercase tracking-[0.2em] text-ink">
              {business.name}
            </p>
            <p className="mt-5 max-w-[38ch] text-[15px] leading-relaxed text-ink-muted">
              {footer.blurb}
            </p>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="lg:col-span-2">
              <h2 className="text-[13px] font-semibold text-ink">{column.title}</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-ink-muted transition-colors duration-200 hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-2 lg:col-span-3">
            <h2 className="text-[13px] font-semibold text-ink">Contact</h2>
            <address className="mt-4 flex flex-col gap-2.5 not-italic">
              <a
                href={business.phoneHref}
                className="text-[14px] text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="text-[14px] text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {business.email}
              </a>
              <span className="text-[14px] leading-relaxed text-ink-muted">
                {business.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-ink-muted">
            &copy; {year} {business.legalName}
          </p>
          <p className="text-[13px] text-ink-muted">
            Serving {business.serviceArea.slice(0, 3).join(", ")} and the west GTA.
          </p>
        </div>
      </div>
    </footer>
  );
}
