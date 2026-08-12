import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Camera } from "@phosphor-icons/react/ssr";

import { photos, type PhotoKey } from "@/lib/photos";

/**
 * Renders a photographic slot.
 *
 * If the file declared in the manifest is present in /public it is rendered
 * through next/image. If it is not, a reservation block of the identical
 * aspect ratio is rendered instead, carrying the art direction for that slot.
 * Layout is therefore identical before and after the real photography lands,
 * so dropping the files in is the only step required to go live.
 */

const presence = new Map<string, boolean>();

function fileExists(src: string) {
  const cached = presence.get(src);
  if (cached !== undefined) return cached;
  const found = fs.existsSync(path.join(process.cwd(), "public", src));
  presence.set(src, found);
  return found;
}

type PhotoProps = {
  slot: PhotoKey;
  /** Responsive sizes hint passed to next/image. */
  sizes?: string;
  /** Set on the LCP image only. */
  priority?: boolean;
  /** Fill the parent box instead of holding the manifest aspect ratio. */
  fill?: boolean;
  /** Drop the frame when the photo sits flush inside an already bordered card. */
  bare?: boolean;
  className?: string;
};

export function Photo({
  slot,
  sizes = "100vw",
  priority = false,
  fill = false,
  bare = false,
  className = "",
}: PhotoProps) {
  const photo = photos[slot];
  const box = fill ? undefined : { aspectRatio: `${photo.width} / ${photo.height}` };
  const frame = bare ? "" : "rounded-edge";
  const size = fill ? "h-full w-full" : "";

  if (fileExists(photo.src)) {
    return (
      <div
        className={`relative overflow-hidden bg-surface-2 ${frame} ${size} ${className}`}
        style={box}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`@container relative overflow-hidden bg-surface-2 ${bare ? "" : "rounded-edge border border-line"} ${size} ${className}`}
      style={box}
      role="img"
      aria-label={photo.alt}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "linear-gradient(150deg, color-mix(in oklab, var(--accent) 12%, var(--surface-2)) 0%, var(--surface-2) 45%, color-mix(in oklab, var(--ink) 6%, var(--surface-2)) 100%)",
        }}
      />
      {/*
        The reservation label scales with the box it is in, not the viewport.
        A 96px footer thumbnail gets the camera mark alone; only a slot wide
        enough to read carries the art direction and the filename.
      */}
      <div className="absolute inset-0 flex flex-col justify-end gap-2 p-3 @[260px]:p-5 @[420px]:p-6">
        <Camera
          size={20}
          weight="light"
          className="text-ink-muted @[260px]:mb-1"
          aria-hidden
        />
        <p className="hidden max-w-[38ch] text-[13px] leading-snug text-ink @[260px]:block">
          {photo.brief}
        </p>
        <p className="hidden font-mono text-[11px] text-ink-muted @[360px]:block">
          {photo.src} · {photo.width}x{photo.height}
        </p>
      </div>
    </div>
  );
}
