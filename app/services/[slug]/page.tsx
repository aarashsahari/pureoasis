import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Plus } from "@phosphor-icons/react/ssr";

import { ClosingBand } from "@/components/site/closing-band";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/ui/page-transition";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { photos } from "@/lib/photos";
import { projects } from "@/lib/projects";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { getService, services } from "@/lib/services";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: photos[service.photo].src,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  const related = projects.filter((project) => project.services.includes(service.slug)).slice(0, 2);
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <PageTransition>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: service.title,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
          }),
          faqSchema(service.faqs),
        ]}
      />

      <PageHeader crumbs={crumbs} title={service.title} lead={service.intro} />

      <section aria-label="What is included" className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-7">
              <Photo slot={service.photo} sizes="(min-width: 1024px) 56vw, 100vw" priority />
            </Reveal>

            <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-center" index={1}>
              <h2 className="display-tight text-[20px]">What the work includes</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink">
                    <Check size={15} weight="bold" className="mt-1.5 shrink-0 text-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label="How we approach it" className="border-b border-line bg-surface-2">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-y-16">
            {service.detail.map((block, i) => (
              <Reveal
                key={block.title}
                index={i}
                className={
                  ["lg:col-span-7 lg:col-start-1", "lg:col-span-7 lg:col-start-3", "lg:col-span-7 lg:col-start-5"][i] ??
                  "lg:col-span-7"
                }
              >
                <div className="border-t border-line-strong pt-6">
                  <h2 className="display text-[24px] lg:text-[30px]">{block.title}</h2>
                  <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-ink-muted sm:text-[16px]">
                    {block.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section aria-label="Projects using this service" className="border-b border-line">
          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <h2 className="display max-w-[18ch] text-[2rem] sm:text-[2.4rem]">
                Where this work shows up.
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-10">
              {related.map((project, i) => (
                <Reveal key={project.slug} index={i}>
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="h-[240px] lg:h-[300px]">
                      <Photo slot={project.cover} fill sizes="(min-width: 1024px) 46vw, 100vw" />
                    </div>
                    <h3 className="display-tight mt-5 text-[19px] transition-colors duration-200 group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-[14px] text-ink-muted">
                      {project.location}, {project.year}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section aria-label="Common questions" className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-4">
              <h2 className="display text-[2rem] sm:text-[2.4rem]">Questions we get.</h2>
            </Reveal>

            <div className="lg:col-span-7 lg:col-start-6">
              {service.faqs.map((faq, i) => (
                <Reveal key={faq.question} index={i}>
                  <details className="group border-b border-line py-5">
                    <summary className="flex cursor-pointer items-start justify-between gap-6 text-[17px] font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <Plus
                        size={16}
                        weight="bold"
                        aria-hidden
                        className="mt-1 shrink-0 text-ink-muted transition-transform duration-200 group-open:rotate-45"
                      />
                    </summary>
                    <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-ink-muted">
                      {faq.answer}
                    </p>
                  </details>
                </Reveal>
              ))}

              <Reveal index={2}>
                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                  {others.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-[14px] text-ink-muted transition-colors duration-200 hover:text-ink"
                    >
                      {item.title}
                      <ArrowRight size={13} weight="bold" aria-hidden />
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ClosingBand />
    </PageTransition>
  );
}
