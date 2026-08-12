import Link from "next/link";

import { Photo } from "@/components/ui/photo";
import { formatPostDate, type Post } from "@/lib/posts";

export function PostCard({
  post,
  coverHeight = "h-[200px]",
}: {
  post: Post;
  coverHeight?: string;
}) {
  return (
    <article className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-edge border border-line transition-colors duration-200 hover:border-line-strong"
      >
        <div className={coverHeight}>
          <Photo slot={post.cover} fill bare sizes="(min-width: 1024px) 33vw, 100vw" />
        </div>
        <div className="flex flex-1 flex-col gap-3 border-t border-line p-6">
          <p className="text-[13px] text-ink-muted">
            <time dateTime={post.published}>{formatPostDate(post.published)}</time>
            {` · ${post.readingMinutes} min read`}
          </p>
          <h3 className="display-tight text-[19px] leading-snug transition-colors duration-200 group-hover:text-accent">
            {post.title}
          </h3>
          <p className="text-[14px] leading-relaxed text-ink-muted">{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
