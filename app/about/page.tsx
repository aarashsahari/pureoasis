import { ClosingBand } from "@/components/site/closing-band";
import { Durability } from "@/components/site/durability";
import { Process } from "@/components/site/process";
import { StatsBand } from "@/components/site/stats-band";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/ui/page-transition";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { about } from "@/lib/content";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Pure Oasis",
  description:
    "A full service landscape company in Hamilton. One crew that builds the property and then maintains it, which changes how the work gets built in the first place.",
  path: "/about",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHeader
        crumbs={crumbs}
        title={about.storyHeadline}
        lead="Build and maintenance under one roof, so the people laying the stone are the people edging the sod against it next season."
      />

      <section aria-label="How the practice works" className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Photo slot="aboutLead" sizes="(min-width: 1024px) 40vw, 100vw" />
              </Reveal>
              <Reveal index={1} className="mt-3">
                <Photo slot="aboutYard" sizes="(min-width: 1024px) 40vw, 100vw" />
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal index={1}>
                <div className="flex flex-col gap-6">
                  {about.story.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="max-w-[62ch] text-[16px] leading-relaxed text-ink-muted sm:text-[17px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal index={2}>
                <dl className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                  {about.values.map((value) => (
                    <div key={value.title} className="border-t border-line-strong pt-5">
                      <dt className="display-tight text-[18px]">{value.title}</dt>
                      <dd className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{value.body}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      <section aria-label="Who you will be working with" className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <h2 className="display max-w-[16ch] text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
              Who you will be dealing with.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:w-[70%] lg:gap-14">
            {about.team.map((person, i) => (
              <Reveal key={person.name} index={i}>
                <article>
                  <Photo slot={person.photo} sizes="(min-width: 1024px) 30vw, 50vw" />
                  <h3 className="display-tight mt-6 text-[20px]">{person.name}</h3>
                  <p className="mt-1 text-[14px] text-accent">{person.role}</p>
                  <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-ink-muted">
                    {person.bio}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Durability />
      <Process />
      <ClosingBand />
    </PageTransition>
  );
}
