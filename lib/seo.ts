import type { Metadata } from "next";
import { site } from "@/data/site";

const TITLE_SUFFIX = ` · ${site.name}`;
const MAX_TITLE = 60;
const MAX_DESCRIPTION = 160;

/** Shorten to `max` characters at a word boundary, adding an ellipsis. */
function fit(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s]+$/, "")}…`;
}

/**
 * Per-page metadata: canonical URL, Open Graph and Twitter cards.
 * Titles keep the brand suffix only when the result fits in search results (~60 chars);
 * descriptions are trimmed to 160 characters. Pages without their own image use the
 * site-wide social card (app/opengraph-image.tsx).
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const fullTitle = title.length + TITLE_SUFFIX.length <= MAX_TITLE ? `${title}${TITLE_SUFFIX}` : fit(title, MAX_TITLE);
  const desc = fit(description, MAX_DESCRIPTION);
  const images = [image ? { url: image, width: 1600, height: 900 } : { url: "/opengraph-image", width: 1200, height: 630 }];
  return {
    title: { absolute: fullTitle },
    description: desc,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description: desc, url: path, siteName: site.name, type: "website", locale: "en_US", images },
    twitter: { card: "summary_large_image", title: fullTitle, description: desc, images: images.map((i) => i.url) },
  };
}
