"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { List, Phone, X } from "@phosphor-icons/react";

import { ButtonLink } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { business, nav } from "@/lib/content";

/**
 * Sticky header, 64px on mobile and 72px at desktop, always one line.
 *
 * Motion: the bar picks up a background and a hairline once the hero has
 * started to leave. That is a state transition, not decoration, and it is the
 * only thing on the header that moves. The threshold is read from a motion
 * value, so React re-renders twice over the whole page rather than per frame.
 */
export function SiteHeader() {
  const { scrollY } = useScroll();
  const [lifted, setLifted] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (value) => {
    const next = value > 24;
    setLifted((current) => (current === next ? current : next));
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        lifted ? "border-b border-line bg-bg/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[72px]">
        <a
          href="#top"
          className="display-tight shrink-0 text-[17px] uppercase tracking-[0.2em] text-ink"
        >
          {business.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[14px] font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/*
            Responsive display lives on wrappers, never as a `hidden` utility on
            the component itself: the buttons already carry `inline-flex`, and
            two display utilities on one element resolve by stylesheet order
            rather than by the one written last.
          */}
          <div className="hidden xl:block">
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 text-[14px] font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              <Phone size={16} weight="light" aria-hidden />
              {business.phone}
            </a>
          </div>
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <div className="hidden sm:block">
            <ButtonLink href={nav.cta.href} className="h-11 px-5">
              {nav.cta.label}
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-edge border border-line text-ink lg:hidden"
          >
            <List size={18} weight="light" aria-hidden />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 bg-bg lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex h-16 items-center justify-between px-5 sm:px-8">
              <span className="display-tight text-[17px] uppercase tracking-[0.2em] text-ink">
                {business.name}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-edge border border-line text-ink"
              >
                <X size={18} weight="light" aria-hidden />
              </button>
            </div>

            <div className="flex flex-col gap-8 px-5 pt-8 sm:px-8">
              <nav aria-label="Primary" className="flex flex-col">
                {nav.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="display border-b border-line py-4 text-[28px] text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col gap-4">
                <ButtonLink href={nav.cta.href} onClick={() => setOpen(false)}>
                  {nav.cta.label}
                </ButtonLink>
                <div className="flex items-center justify-between">
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center gap-2 text-[15px] text-ink-muted"
                  >
                    <Phone size={16} weight="light" aria-hidden />
                    {business.phone}
                  </a>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
