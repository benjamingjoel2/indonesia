import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getDestinations, getExperiences, getItineraries, getStays } from "@/lib/data";
import { getPostSlugs } from "@/lib/blog";
import { legalPages } from "@/data/pages";
import { locales, localizeHref } from "@/lib/i18n/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/",
    "/destinations",
    "/trips",
    "/experiences",
    "/stays",
    "/plan-your-trip",
    "/about",
    "/why-travel-with-us",
    "/sustainability",
    "/faq",
    "/contact",
    "/private-travel",
    "/blog",
    ...getDestinations().map((d) => `/${d.slug}`),
    ...getItineraries().map((i) => `/trips/${i.slug}`),
    ...getExperiences().map((e) => `/experiences/${e.slug}`),
    ...getStays().map((s) => `/stays/${s.slug}`),
    ...getPostSlugs().map((s) => `/blog/${s}`),
    ...Object.keys(legalPages).map((s) => `/legal/${s}`),
  ];
  // Every page in English, French, German and Spanish, each listing its alternates.
  const url = (p: string) => `${site.url}${p === "/" ? "" : p}`;
  return paths.flatMap((p) => {
    const languages = Object.fromEntries(locales.map((l) => [l, url(localizeHref(p, l))]));
    return locales.map((l) => ({
      url: url(localizeHref(p, l)),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p === "/" ? 1 : 0.7,
      alternates: { languages },
    }));
  });
}
