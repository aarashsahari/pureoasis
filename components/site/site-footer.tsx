import Link from "next/link";
import { EnvelopeSimple, FacebookLogo, InstagramLogo, LinkedinLogo, Phone } from "@phosphor-icons/react/ssr";

import { Photo } from "@/components/ui/photo";
import { areas } from "@/lib/areas";
import { business, footer } from "@/lib/content";
import type { PhotoKey } from "@/lib/photos";
import { services } from "@/lib/services";

const logos = {
  Instagram: InstagramLogo,
  Facebook: FacebookLogo,
  LinkedIn: LinkedinLogo,
} as const;

const thumbnails: PhotoKey[] = [
  "footerOne",
  "footerTwo",
  "footerThree",
  "footerFour",
  "footerFive",
  "footerSix",
];

const companyLinks = [
  { label: "About the practice", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Journal", href: "/blog" },
  { label: "Book a consult", href: "/contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="display-tight text-[17px] uppercase tracking-[0.2em] text-ink">
              {business.name}
            </Link>
            <p className="mt-5 max-w-[36ch] text-[15px] leading-relaxed text-ink-muted">{footer.blurb}</p>
            <ul className="mt-6 flex items-center gap-3">
              {business.social.map((account) => {
                const Logo = logos[account.label];
                return (
                  <li key={account.label}>
                    <a
                      href={account.href}
                      rel="noreferrer noopener"
                      target="_blank"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-edge border border-line text-ink-muted transition-colors duration-200 hover:border-ink hover:text-ink"
                    >
                      <Logo size={16} weight="regular" aria-hidden />
                      <span className="sr-only">{account.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav aria-label="Services" className="lg:col-span-2">
            <h2 className="text-[13px] font-semibold text-ink">Services</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[14px] text-ink-muted transition-colors duration-200 hover:text-ink"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Areas we serve" className="lg:col-span-2">
            <h2 className="text-[13px] font-semibold text-ink">Where we work</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-[14px] text-ink-muted transition-colors duration-200 hover:text-ink"
                  >
                    {area.city}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-2">
            <h2 className="text-[13px] font-semibold text-ink">Practice</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-ink-muted transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-2">
            <h2 className="text-[13px] font-semibold text-ink">Contact</h2>
            <address className="mt-4 flex flex-col gap-2.5 not-italic">
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 text-[14px] text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                <Phone size={14} weight="light" aria-hidden />
                {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="inline-flex items-center gap-2 text-[14px] text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                <EnvelopeSimple size={14} weight="light" aria-hidden />
                {business.email}
              </a>
              <span className="mt-1 text-[14px] leading-relaxed text-ink-muted">
                {business.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </address>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-[13px] font-semibold text-ink">From recent builds</h2>
            <Link
              href="/projects"
              className="text-[13px] text-ink-muted underline underline-offset-4 transition-colors duration-200 hover:text-ink"
            >
              See the projects
            </Link>
          </div>
          <ul className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {thumbnails.map((slot) => (
              <li key={slot}>
                <Link href="/projects" className="block">
                  <Photo slot={slot} sizes="(min-width: 640px) 15vw, 30vw" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-ink-muted">
            &copy; {year} {business.legalName}
          </p>
          <p className="text-[13px] text-ink-muted">
            Serving Hamilton, Burlington, Ancaster and the west GTA.
          </p>
        </div>
      </div>
    </footer>
  );
}
