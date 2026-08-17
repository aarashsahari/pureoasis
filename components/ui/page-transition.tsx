import { ViewTransition, type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-swap" exit="page-swap" default="none">
      {children}
    </ViewTransition>
  );
}
