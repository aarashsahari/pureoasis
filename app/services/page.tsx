import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";

import { ClosingBand } from "@/components/site/closing-band";
import { Pricing } from "@/components/site/pricing";
import { Process } from "@/components/site/process";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/ui/page-transition";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { SITE_URL } from "@/lib/content";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Landscape Services in Hamilton and Burlington",
  description:
    "Design, interlock and natural stone, pool surrounds, planting, lighting and irrigation across Hamilton, Burlington and the west GTA, with published price ranges.",
  path: "/services",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

const catalogue = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Landscape services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `${SITE_URL}/services/${service.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <JsonLd data={[breadcrumbSchema(crumbs), catalogue]} />

      <PageHeader
        crumbs={crumbs}
        title="Five things we do, and one way we do them."
        lead="Everything below is designed in house and built by our own crew. Most projects use several of these at once, which is the point of keeping them under one roof."
      />

      <section aria-label="Services" className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
          <ul className="flex flex-col">
            {services.map((service, i) => (
              <Reveal as="li" key={service.slug} index={i % 3}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid grid-cols-1 items-center gap-6 border-t border-line py-8 transition-colors duration-200 hover:border-line-strong lg:grid-cols-12 lg:gap-10 lg:py-10"
                >
                  <div className="lg:col-span-3">
                    <div className="h-[180px] lg:h-[160px]">
                      <Photo slot={service.photo} fill sizes="(min-width: 1024px) 24vw, 100vw" />
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <h2 className="display text-[1.6rem] leading-tight transition-colors duration-200 group-hover:text-accent lg:text-[2rem]">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">
                      {service.summary}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                      {service.includes.slice(0, 3).map((item) => (
                        <li key={item} className="text-[13px] text-ink-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-1 lg:justify-self-end">
                    <ArrowUpRight
                      size={22}
                      weight="bold"
                      aria-hidden
                      className="text-ink-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Pricing />
      <Process />
      <ClosingBand />
    </PageTransition>
  );
}
