import type { Metadata } from "next";
import { site } from "@/data/site";
import { locales, localizeHref, ogLocale } from "@/lib/i18n/config";
import { getLocale, t } from "@/lib/i18n/server";

const TITLE_SUFFIX = ` · ${site.name}`;
const MAX_TITLE = 60;
const MAX_DESCRIPTION = 160;

/** Shorten to `max` characters at a word boundary, adding an ellipsis. */
function fit(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s]+$/, "")}…`;
}

/** Canonical URL path of `path` in the current locale, plus hreflang alternates for every locale. */
export function alternatesFor(path: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = localizeHref(path, l);
  languages["x-default"] = path;
  return { canonical: localizeHref(path, getLocale()), languages };
}

/**
 * Per-page metadata: canonical URL, hreflang alternates, Open Graph and Twitter cards.
 * `title` and `description` are English source strings, translated here for the page's locale.
 * Titles keep the brand suffix only when the result fits in search results (~60 chars);
 * descriptions are trimmed to 160 characters. Pages without their own image use the
 * site-wide social card (app/opengraph-image.tsx).
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  absolute,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Use the title as is, without the brand suffix. */
  absolute?: boolean;
}): Metadata {
  const locale = getLocale();
  const tt = t(title);
  const fullTitle = absolute ? tt : tt.length + TITLE_SUFFIX.length <= MAX_TITLE ? `${tt}${TITLE_SUFFIX}` : fit(tt, MAX_TITLE);
  const desc = fit(t(description), MAX_DESCRIPTION);
  const images = [image ? { url: image, width: 1600, height: 900 } : { url: "/opengraph-image", width: 1200, height: 630 }];
  const alternates = alternatesFor(path);
  return {
    title: { absolute: fullTitle },
    description: desc,
    alternates,
    openGraph: { title: fullTitle, description: desc, url: alternates.canonical, siteName: site.name, type: "website", locale: ogLocale[locale], images },
    twitter: { card: "summary_large_image", title: fullTitle, description: desc, images: images.map((i) => i.url) },
  };
}
