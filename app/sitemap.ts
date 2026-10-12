import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getDestinations, getExperiences, getItineraries, getStays } from "@/lib/data";
import { getPostSlugs } from "@/lib/blog";

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
    "/testimonials",
    "/faq",
    "/contact",
    "/private-travel",
    "/blog",
    ...getDestinations().map((d) => `/${d.slug}`),
    ...getItineraries().map((i) => `/trips/${i.slug}`),
    ...getExperiences().map((e) => `/experiences/${e.slug}`),
    ...getStays().map((s) => `/stays/${s.slug}`),
    ...getPostSlugs().map((s) => `/blog/${s}`),
  ];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency: "weekly", priority: p === "/" ? 1 : 0.7 }));
}
