import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react/ssr";

import { ClosingBand } from "@/components/site/closing-band";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/ui/page-transition";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { SITE_URL } from "@/lib/content";
import { photos } from "@/lib/photos";
import { getProject, projects } from "@/lib/projects";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { getService } from "@/lib/services";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return pageMetadata({
    title: project.title,
    description: project.metaDescription,
    path: `/projects/${project.slug}`,
    image: photos[project.cover].src,
  });
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.location, path: `/projects/${project.slug}` },
  ];

  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const usedServices = project.services.map(getService).filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.metaDescription,
    url: `${SITE_URL}/projects/${project.slug}`,
    dateCreated: project.year,
    locationCreated: { "@type": "Place", name: project.location },
    creator: { "@id": `${SITE_URL}/#business` },
    image: `${SITE_URL}${photos[project.cover].src}`,
  };

  return (
    <PageTransition>
      <JsonLd data={[breadcrumbSchema(crumbs), schema]} />

      <PageHeader crumbs={crumbs} title={project.title} lead={project.summary} />

      <section aria-label="Project" className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <Photo slot={project.cover} sizes="(min-width: 1400px) 1400px, 100vw" priority />
          </Reveal>

          <Reveal index={1}>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 lg:grid-cols-4 lg:gap-10">
              {project.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[13px] text-ink-muted">{fact.label}</dt>
                  <dd className="mt-1.5 text-[15px] leading-snug text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className="display text-[1.7rem] lg:text-[2.1rem]">The problem</h2>
                <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-ink-muted">
                  {project.problem}
                </p>
              </Reveal>

              <Reveal index={1}>
                <h2 className="display mt-14 text-[1.7rem] lg:text-[2.1rem]">What we did</h2>
                <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-ink-muted">
                  {project.approach}
                </p>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-5 lg:col-start-8" index={1}>
              <Photo slot={project.detail} sizes="(min-width: 1024px) 40vw, 100vw" />
              <div className="mt-10 border-t border-line-strong pt-6">
                <h2 className="display text-[1.7rem] lg:text-[2.1rem]">How it held up</h2>
                <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-ink-muted">
                  {project.outcome}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal index={2}>
            <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-8">
              <span className="text-[14px] text-ink-muted">Services used</span>
              {usedServices.map((service) => (
                <Link
                  key={service!.slug}
                  href={`/services/${service!.slug}`}
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink underline underline-offset-4 transition-colors duration-200 hover:text-accent"
                >
                  {service!.title}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Next project" className="border-b border-line bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-20">
          <Reveal>
            <Link href={`/projects/${next.slug}`} className="group grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="h-[200px]">
                  <Photo slot={next.cover} fill sizes="(min-width: 1024px) 32vw, 100vw" />
                </div>
              </div>
              <div className="lg:col-span-6 lg:col-start-6 lg:self-center">
                <p className="text-[13px] text-ink-muted">Next project</p>
                <h2 className="display mt-3 max-w-[22ch] text-[1.5rem] leading-tight transition-colors duration-200 group-hover:text-accent lg:text-[1.9rem]">
                  {next.title}
                </h2>
                <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-ink underline underline-offset-4">
                  Read it
                  <ArrowRight size={16} weight="bold" aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <ClosingBand />
    </PageTransition>
  );
}
