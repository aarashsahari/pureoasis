"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { CaretDown, List, Phone, X } from "@phosphor-icons/react";

import { ButtonLink } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { business, nav } from "@/lib/content";
import { services } from "@/lib/services";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [lifted, setLifted] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [servicesPath, setServicesPath] = useState<string | null>(null);
  const [mobileServicesPath, setMobileServicesPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const servicesOpen = servicesPath === pathname;
  const mobileServicesOpen = mobileServicesPath === pathname;

  const setMenuOpen = (open: boolean) => setMenuPath(open ? pathname : null);
  const setServicesOpen = (open: boolean) => setServicesPath(open ? pathname : null);

  useMotionValueEvent(scrollY, "change", (value) => {
    const next = value > 24;
    setLifted((current) => (current === next ? current : next));
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    // Closing only ever clears, so the state setters are used directly here
    // and the listeners stay registered for the life of the header.
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setMenuPath(null);
      setServicesPath(null);
    }
    function onPointerDown(event: PointerEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesPath(null);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        lifted ? "border-b border-line bg-bg/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[72px]">
        <Link href="/" className="display-tight shrink-0 text-[17px] uppercase tracking-[0.2em] text-ink">
          {business.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) =>
            "hasChildren" in link && link.hasChildren ? (
              <div key={link.href} ref={servicesRef} className="relative">
                <div className="flex items-center gap-1">
                  <Link
                    href={link.href}
                    className={`text-[14px] font-medium transition-colors duration-200 hover:text-ink ${
                      isActive(link.href) ? "text-ink" : "text-ink-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    aria-label="Show all services"
                    className="text-ink-muted transition-colors duration-200 hover:text-ink"
                  >
                    <CaretDown
                      size={12}
                      weight="bold"
                      aria-hidden
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {servicesOpen ? (
                    <motion.div
                      id="services-menu"
                      className="absolute left-0 top-full z-50 mt-4 w-[320px] rounded-edge border border-line bg-bg p-2 shadow-[0_24px_60px_rgb(0_0_0_/_0.16)]"
                      initial={reduce ? false : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? { opacity: 1 } : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      <ul>
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="block rounded-edge px-3 py-2.5 text-[14px] text-ink-muted transition-colors duration-200 hover:bg-surface hover:text-ink"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-medium transition-colors duration-200 hover:text-ink ${
                  isActive(link.href) ? "text-ink" : "text-ink-muted"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          {/* hidden goes on the wrapper: these already carry inline-flex */}
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
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-edge border border-line text-ink lg:hidden"
          >
            <List size={18} weight="light" aria-hidden />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto bg-bg lg:hidden"
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
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-edge border border-line text-ink"
              >
                <X size={18} weight="light" aria-hidden />
              </button>
            </div>

            <div className="flex flex-col gap-8 px-5 pb-16 pt-6 sm:px-8">
              <nav aria-label="Primary" className="flex flex-col">
                {nav.links.map((link) =>
                  "hasChildren" in link && link.hasChildren ? (
                    <div key={link.href} className="border-b border-line">
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="display py-4 text-[26px] text-ink"
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileServicesPath(mobileServicesOpen ? null : pathname)}
                          aria-expanded={mobileServicesOpen}
                          aria-label="Show all services"
                          className="inline-flex h-10 w-10 items-center justify-center text-ink-muted"
                        >
                          <CaretDown
                            size={14}
                            weight="bold"
                            aria-hidden
                            className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>
                      {mobileServicesOpen ? (
                        <ul className="flex flex-col gap-1 pb-4 pl-1">
                          {services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/services/${service.slug}`}
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 text-[15px] text-ink-muted"
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="display border-b border-line py-4 text-[26px] text-ink"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="flex flex-col gap-4">
                <ButtonLink href={nav.cta.href} onClick={() => setMenuOpen(false)}>
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
