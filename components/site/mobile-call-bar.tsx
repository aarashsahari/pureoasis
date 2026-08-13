"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useState } from "react";
import { Phone } from "@phosphor-icons/react";

import { business, nav } from "@/lib/content";

/**
 * Persistent call bar, phones only.
 *
 * Most enquiries to a trade business start as a phone call from a phone, and
 * the header CTA is hidden at this width to keep the bar on one line. This
 * puts both actions permanently within thumb reach instead.
 *
 * It appears once the hero is behind you, so it never covers the first screen,
 * and it is hidden on the contact page where the form is already the point.
 */
export function MobileCallBar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [shown, setShown] = useState(false);
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (value) => {
    const next = value > 520;
    setShown((current) => (current === next ? current : next));
  });

  if (pathname === nav.cta.href) return null;

  return (
    <motion.div
      // Padding for the home indicator on phones that have one.
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md sm:hidden"
      initial={false}
      animate={reduce ? { y: shown ? 0 : "100%" } : { y: shown ? 0 : "110%" }}
      transition={reduce ? { duration: 0 } : { duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden={!shown}
    >
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={business.phoneHref}
          tabIndex={shown ? undefined : -1}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-edge border border-line-strong text-[15px] font-semibold text-ink"
        >
          <Phone size={17} weight="light" aria-hidden />
          Call
        </a>
        <Link
          href={nav.cta.href}
          tabIndex={shown ? undefined : -1}
          className="inline-flex h-12 items-center justify-center rounded-edge bg-accent text-[15px] font-semibold text-accent-ink"
        >
          {nav.cta.label}
        </Link>
      </div>
    </motion.div>
  );
}
