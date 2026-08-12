import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/**
 * Buttons and button-shaped links.
 *
 * Contrast: `solid` puts --accent-ink on --accent (6.6:1 light, 9.0:1 dark).
 * `outline` puts --ink on the page background (15:1 both modes). Neither
 * variant is ever placed over a photograph without a scrim behind it.
 * Radius follows the single page token, --radius-edge.
 */

type Variant = "solid" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-edge " +
  "px-6 h-12 text-[15px] font-semibold tracking-[-0.01em] transition-[transform,background-color,border-color,color] " +
  "duration-200 ease-out active:translate-y-px motion-reduce:transition-none motion-reduce:active:translate-y-0";

const variants: Record<Variant, string> = {
  solid: "bg-accent text-accent-ink hover:bg-accent-hover",
  outline: "border border-line-strong text-ink hover:border-ink hover:bg-surface",
};

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode };

/**
 * Internal routes go through next/link so navigation stays client side and the
 * destination is prefetched. Protocol links (tel:, mailto:) fall back to a
 * plain anchor, which is what Link would produce anyway minus the routing.
 */
export function ButtonLink({ variant = "solid", className = "", children, href, ...props }: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const target = typeof href === "string" ? href : href.pathname ?? "";

  if (target.startsWith("tel:") || target.startsWith("mailto:") || target.startsWith("http")) {
    return (
      <a className={classes} href={target} {...(props as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant; children: ReactNode };

export function Button({ variant = "solid", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
