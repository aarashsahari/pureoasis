"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "loading" | "finishing";

// Routes are prefetched, so navigation lands before the eye catches it.
// Starts on the click, not on the pathname change, which is already too late.
export function RouteProgress() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const startedAt = useRef(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as HTMLElement | null)?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href?.startsWith("/") || link.target === "_blank") return;
      if (href === pathname) return;

      clearTimers();
      startedAt.current = Date.now();
      setPhase("loading");
    }

    // Capture phase: Link calls preventDefault while the event is still
    // bubbling up to us, so a listener on the way down is the only one that
    // sees the click at all.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  // The new route has rendered. Let the bar finish rather than cutting it off
  // mid travel, which reads as a glitch rather than as a load.
  useEffect(() => {
    if (phase !== "loading") return;

    const elapsed = Date.now() - startedAt.current;
    const hold = Math.max(0, 260 - elapsed);

    timers.current.push(
      setTimeout(() => setPhase("finishing"), hold),
      setTimeout(() => setPhase("idle"), hold + 420)
    );

    return clearTimers;
    // Deliberately keyed on pathname: this runs when the route lands.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => clearTimers, []);

  if (phase === "idle") return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px]"
      role="status"
      aria-label="Loading page"
    >
      <div
        className={`h-full bg-accent shadow-[0_0_12px_var(--accent)] ${
          phase === "loading" ? "route-progress-run" : "route-progress-done"
        }`}
      />
    </div>
  );
}
