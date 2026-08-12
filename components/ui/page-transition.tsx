import { ViewTransition, type ReactNode } from "react";

/**
 * Route transition.
 *
 * Motivation: navigation between pages should read as one continuous document
 * rather than a hard cut, which is what makes a multi page site feel like the
 * application it is. The old page leaves quickly so it stops competing for
 * attention, the new page arrives a beat later.
 *
 * This has to wrap the content inside each `page.tsx`. Layouts persist across
 * navigation, so enter and exit never fire from there.
 *
 * The animation itself lives in globals.css under `.page-swap`, where it is
 * also disabled wholesale under prefers-reduced-motion.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-swap" exit="page-swap" default="none">
      {children}
    </ViewTransition>
  );
}
