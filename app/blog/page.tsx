import { ClosingBand } from "@/components/site/closing-band";
import { PostCard } from "@/components/site/post-card";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/ui/page-transition";
import { Reveal } from "@/components/ui/reveal";
import { SITE_URL } from "@/lib/content";
import { posts } from "@/lib/posts";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Journal",
  description:
    "Writing on how landscapes are built and kept in southern Ontario: freeze and thaw, why lawns thin out in August, and where the money actually goes on a build.",
  path: "/blog",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Journal", path: "/blog" },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Pure Oasis Journal",
  url: `${SITE_URL}/blog`,
  publisher: { "@id": `${SITE_URL}/#business` },
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.published,
    url: `${SITE_URL}/blog/${post.slug}`,
  })),
};

export default function BlogPage() {
  return (
    <PageTransition>
      <JsonLd data={[breadcrumbSchema(crumbs), blogSchema]} />

      <PageHeader
        crumbs={crumbs}
        title="Notes on building gardens that survive here."
        lead="Written for homeowners deciding between quotes. Everything here is the reasoning we would give you at a walkthrough, in the order we would give it."
      />

      <section aria-label="All writing" className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {posts.map((post, i) => (
              <Reveal key={post.slug} index={i}>
                <PostCard post={post} coverHeight="h-[220px]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingBand />
    </PageTransition>
  );
}
