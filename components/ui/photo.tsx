import Image from "next/image";

import blurSeeds from "@/lib/photo-blur.json";
import { photos, type PhotoKey } from "@/lib/photos";

/**
 * Renders a photographic slot from the manifest.
 *
 * Every slot has a file in /public/images, so this just renders it. Swapping
 * in a real photograph means replacing the file at the same path: the size,
 * the alt text and the layout all come from the manifest and do not change.
 *
 * Blur seeds come from `npm run photos`, so images fade up from a blur of
 * themselves instead of popping in.
 */
const blurMap = blurSeeds as Record<string, string>;

type PhotoProps = {
  slot: PhotoKey;
  /** Responsive sizes hint passed to next/image. */
  sizes?: string;
  /** Set on the LCP image only. */
  priority?: boolean;
  /** Fill the parent box instead of holding the manifest aspect ratio. */
  fill?: boolean;
  /** Drop the rounded frame when the image sits flush inside a bordered card. */
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
  const blur = blurMap[slot];

  return (
    <div
      className={`relative overflow-hidden bg-surface-2 ${bare ? "" : "rounded-edge"} ${
        fill ? "h-full w-full" : ""
      } ${className}`}
      style={fill ? undefined : { aspectRatio: `${photo.width} / ${photo.height}` }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        priority={priority}
        {...(blur ? { placeholder: "blur" as const, blurDataURL: blur } : {})}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
