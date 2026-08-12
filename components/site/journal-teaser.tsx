import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";

import { PostCard } from "@/components/site/post-card";
import { Reveal } from "@/components/ui/reveal";
import { posts } from "@/lib/posts";

/**
 * Three posts at three widths. The lead post gets the room because it is the
 * one worth reading first, and the descending sizes keep this from reading as
 * a row of identical cards.
 */
const spans = ["lg:col-span-5", "lg:col-span-4", "lg:col-span-3"];

export function JournalTeaser() {
  return (
    <section aria-label="From the journal" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display max-w-[16ch] text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
              What we have written down.
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-ink underline underline-offset-4 transition-colors duration-200 hover:text-accent"
            >
              All writing
              <ArrowRight size={16} weight="bold" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} index={i} className={spans[i]}>
              <PostCard post={post} coverHeight={i === 0 ? "h-[240px]" : "h-[190px]"} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
