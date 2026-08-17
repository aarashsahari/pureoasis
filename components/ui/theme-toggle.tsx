"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

export const THEME_KEY = "pureoasis-theme";
const THEME_EVENT = "pureoasis:themechange";

type Theme = "light" | "dark";

function subscribe(onChange: () => void) {
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  query.addEventListener("change", onChange);
  window.addEventListener(THEME_EVENT, onChange);
  return () => {
    query.removeEventListener("change", onChange);
    window.removeEventListener(THEME_EVENT, onChange);
  };
}

function getSnapshot(): Theme {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === "light" || explicit === "dark") return explicit;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** The server cannot know the preference, so it renders the neutral slot. */
function getServerSnapshot(): Theme | null {
  return null;
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem(THEME_KEY, next);
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-edge border border-line text-ink transition-colors duration-200 hover:border-ink ${className}`}
    >
      {theme === "dark" ? (
        <Sun size={17} weight="light" aria-hidden />
      ) : theme === "light" ? (
        <Moon size={17} weight="light" aria-hidden />
      ) : (
        <span className="h-[17px] w-[17px]" aria-hidden />
      )}
    </button>
  );
}
