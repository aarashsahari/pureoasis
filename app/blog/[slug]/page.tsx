import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react/ssr";

import { ClosingBand } from "@/components/site/closing-band";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/ui/page-transition";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { photos } from "@/lib/photos";
import { formatPostDate, getPost, posts } from "@/lib/posts";
import { articleSchema, breadcrumbSchema, pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return pageMetadata({
    title: post.metaTitle ?? post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: photos[post.cover].src,
    type: "article",
    publishedTime: post.published,
  });
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journal", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const others = posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <PageTransition>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            path: `/blog/${post.slug}`,
            published: post.published,
            updated: post.updated,
            author: post.author,
            image: photos[post.cover].src,
          }),
        ]}
      />

      <PageHeader crumbs={crumbs} title={post.title} lead={post.excerpt}>
        <p className="mt-8 text-[14px] leading-relaxed text-ink-muted">
          <time dateTime={post.published}>{formatPostDate(post.published)}</time>
          {` · ${post.readingMinutes} min read`}
          <br />
          {`${post.author}, ${post.authorRole}`}
        </p>
      </PageHeader>

      <article className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <Photo slot={post.cover} sizes="(min-width: 1400px) 1400px, 100vw" priority />
          </Reveal>

          <div className="mt-14 lg:mt-20">
            {post.body.map((block, i) => (
              <Reveal key={block.heading ?? `block-${i}`} index={0}>
                {/* spacing lives here, not a first: variant: each block is its own wrapper */}
                <div className={`mx-auto max-w-[68ch] ${i === 0 ? "" : "mt-14"}`}>
                  {block.heading ? (
                    <h2 className="display text-[1.6rem] lg:text-[2rem]">{block.heading}</h2>
                  ) : null}
                  {block.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="mt-5 text-[17px] leading-[1.75] text-ink-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mx-auto mt-16 max-w-[68ch] border-t border-line pt-8">
              <p className="text-[15px] leading-relaxed text-ink-muted">
                Written by {post.author}, {post.authorRole.toLowerCase()} at Pure Oasis.
              </p>
            </div>
          </Reveal>
        </div>
      </article>

      <section aria-label="More writing" className="border-b border-line bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-20">
          <Reveal>
            <h2 className="display text-[1.7rem] lg:text-[2.1rem]">Keep reading.</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            {others.map((item, i) => (
              <Reveal key={item.slug} index={i}>
                <Link href={`/blog/${item.slug}`} className="group flex gap-5">
                  <div className="h-[110px] w-[150px] shrink-0">
                    <Photo slot={item.cover} fill sizes="150px" />
                  </div>
                  <div>
                    <h3 className="display-tight text-[17px] leading-snug transition-colors duration-200 group-hover:text-accent">
                      {item.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[14px] text-ink-muted">
                      Read it
                      <ArrowRight size={13} weight="bold" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingBand />
    </PageTransition>
  );
}
