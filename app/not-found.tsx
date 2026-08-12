import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { services } from "@/lib/services";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto flex min-h-[60vh] max-w-[1400px] flex-col justify-center px-5 py-24 sm:px-8">
        <p className="eyebrow">Page not found</p>
        <h1 className="display mt-6 max-w-[18ch] text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
          That page is not here.
        </h1>
        <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-ink-muted">
          The link may be out of date. The pages below cover most of what people arrive looking for.
        </p>

        <div className="mt-9">
          <ButtonLink href="/">Back to the home page</ButtonLink>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="text-[15px] text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
