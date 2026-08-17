import Link from "next/link";

import { ClosingBand } from "@/components/site/closing-band";
import { WorkGallery } from "@/components/site/work-gallery";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/ui/page-transition";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { SITE_URL } from "@/lib/content";
import { projects } from "@/lib/projects";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Recent landscaping work around Hamilton. What each property was doing wrong, what we changed, and how it has held up since.",
  path: "/projects",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
];

const list = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projects",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: project.title,
    url: `${SITE_URL}/projects/${project.slug}`,
  })),
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <JsonLd data={[breadcrumbSchema(crumbs), list]} />

      <PageHeader
        crumbs={crumbs}
        title="What the property was doing wrong, and what changed."
        lead="Every one of these started as a problem rather than a wish list. The photographs are the easy part to show. The reasoning is the part worth reading."
      />

      <section aria-label="Projects" className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="flex flex-col gap-16 lg:gap-24">
            {projects.map((project, i) => (
              <Reveal key={project.slug} index={0}>
                <article>
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <Photo
                      slot={project.cover}
                      sizes="(min-width: 1400px) 1400px, 100vw"
                      priority={i === 0}
                    />
                    <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
                      <div className="lg:col-span-7">
                        <h2 className="display max-w-[22ch] text-[1.7rem] leading-tight transition-colors duration-200 group-hover:text-accent lg:text-[2.2rem]">
                          {project.title}
                        </h2>
                        <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-ink-muted sm:text-[16px]">
                          {project.summary}
                        </p>
                      </div>
                      <dl className="lg:col-span-4 lg:col-start-9">
                        <div className="flex justify-between gap-6 border-t border-line py-3 text-[14px]">
                          <dt className="text-ink-muted">Location</dt>
                          <dd className="text-ink">{project.location}</dd>
                        </div>
                      </dl>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WorkGallery />
      <ClosingBand />
    </PageTransition>
  );
}
