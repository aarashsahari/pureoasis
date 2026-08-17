import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";

export type Crumb = { name: string; path: string };

export function PageHeader({
  crumbs,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 pb-14 pt-10 sm:px-8 lg:pb-20 lg:pt-14">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-ink-muted">
              {crumbs.map((crumb, index) => {
                const last = index === crumbs.length - 1;
                return (
                  <li key={crumb.path} className="flex items-center gap-1.5">
                    {last ? (
                      <span aria-current="page" className="text-ink">
                        {crumb.name}
                      </span>
                    ) : (
                      <>
                        <Link
                          href={crumb.path}
                          className="transition-colors duration-200 hover:text-ink"
                        >
                          {crumb.name}
                        </Link>
                        <CaretRight size={11} weight="bold" aria-hidden className="text-ink-muted" />
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </Reveal>

        <Reveal index={1}>
          <h1 className="display mt-7 max-w-[20ch] text-balance text-[2.1rem] leading-[1.06] sm:text-[2.6rem] lg:text-[3.2rem]">
            {title}
          </h1>
        </Reveal>

        {lead ? (
          <Reveal index={2}>
            <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-ink-muted sm:text-[17px]">
              {lead}
            </p>
          </Reveal>
        ) : null}

        {children ? <Reveal index={3}>{children}</Reveal> : null}
      </div>
    </section>
  );
}
