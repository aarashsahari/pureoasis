"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Scroll reveal. Motivation: content enters in the order it should be read,
 * which gives each section a beginning rather than arriving all at once.
 * Collapses to a plain static render under prefers-reduced-motion.
 */

type RevealProps = {
  children: ReactNode;
  /** Stagger position within a group of siblings. */
  index?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({ children, index = 0, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      data-reveal
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: reduce ? 0 : index * 0.07, ease: EASE }}
    >
      {children}
    </Component>
  );
}

/**
 * Hero entry. Motivation: establishes reading hierarchy on load, headline
 * before supporting copy before the call to action.
 */
export function HeroEnter({ children, index = 0, className }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      data-reveal
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: reduce ? 0 : 0.08 + index * 0.09, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
