import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";

import { ClosingBand } from "@/components/site/closing-band";
import { Testimonials } from "@/components/site/testimonials";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/ui/page-transition";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { areas, getArea } from "@/lib/areas";
import { SITE_URL, business } from "@/lib/content";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  return pageMetadata({
    title: `Landscape Design and Build in ${area.city}`,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaPage({ params }: Params) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Where we work", path: `/areas/${area.slug}` },
    { name: area.city, path: `/areas/${area.slug}` },
  ];

  const others = areas.filter((item) => item.slug !== area.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Landscape design and build in ${area.city}`,
    description: area.metaDescription,
    url: `${SITE_URL}/areas/${area.slug}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: area.city, containedInPlace: { "@type": "State", name: "Ontario" } },
  };

  return (
    <PageTransition>
      <JsonLd data={[breadcrumbSchema(crumbs.slice(0, 1).concat(crumbs.slice(2))), schema]} />

      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: area.city, path: `/areas/${area.slug}` },
        ]}
        title={`Landscape design and build in ${area.city}.`}
        lead={area.intro}
      />

      <section aria-label={`Ground conditions in ${area.city}`} className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-6">
              <Photo slot="heroMain" sizes="(min-width: 1024px) 46vw, 100vw" />
            </Reveal>

            <div className="lg:col-span-5 lg:col-start-8 lg:self-center">
              <Reveal index={1}>
                <h2 className="display text-[1.7rem] lg:text-[2.2rem]">What the ground does here</h2>
                <p className="mt-5 max-w-[56ch] text-[16px] leading-relaxed text-ink-muted">
                  {area.ground}
                </p>
              </Reveal>

              <Reveal index={2}>
                <h3 className="display-tight mt-12 text-[18px]">What we are usually asked for</h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {area.typicalWork.map((item) => (
                    <li key={item} className="border-t border-line pt-3 text-[15px] text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal index={3}>
                <p className="mt-10 text-[15px] leading-relaxed text-ink-muted">
                  Neighbourhoods we work in regularly: {area.neighbourhoods.join(", ")}. If you are just
                  outside them, call {business.phone} and ask.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Services available here" className="border-b border-line bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <h2 className="display max-w-[20ch] text-[1.8rem] sm:text-[2.2rem]">
              What we build in {area.city}.
            </h2>
          </Reveal>

          <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2 lg:mt-14">
            {services.map((service, i) => (
              <Reveal as="li" key={service.slug} index={i % 2}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-start justify-between gap-6 border-t border-line py-5 transition-colors duration-200 hover:border-line-strong"
                >
                  <span>
                    <span className="display-tight block text-[18px] transition-colors duration-200 group-hover:text-accent">
                      {service.title}
                    </span>
                    <span className="mt-2 block max-w-[42ch] text-[14px] leading-relaxed text-ink-muted">
                      {service.summary}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={17}
                    weight="bold"
                    aria-hidden
                    className="mt-1 shrink-0 text-ink-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </Link>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-8">
              <span className="text-[14px] text-ink-muted">We also work in</span>
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={`/areas/${item.slug}`}
                  className="text-[14px] font-semibold text-ink underline underline-offset-4 transition-colors duration-200 hover:text-accent"
                >
                  {item.city}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <ClosingBand />
    </PageTransition>
  );
}
