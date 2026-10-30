import type { ImageLoaderProps } from "next/image";

/**
 * Serve photos straight from Unsplash's global image CDN (imgix), resized to the
 * width the browser asks for and in AVIF/WebP where supported. This skips the
 * Vercel image optimizer, so there is no cold first request, no extra hop and no
 * optimization quota to run out of.
 */
export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  if (!src.startsWith("https://images.unsplash.com/")) return src;
  const url = new URL(src);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 65));
  return url.toString();
}
