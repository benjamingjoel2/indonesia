import { getPosts } from "./blog";
import { destinationName, getDestinations, getExperiences, getItineraries, getStays } from "./data";
import { stayTypeLabel } from "./data-labels";
import type { SearchItem } from "./search";

/** Server-only: builds the site search index; passed to the client overlay as a prop. */
export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];
  for (const d of getDestinations()) {
    items.push({ kind: "Destination", title: d.name, subtitle: d.region, href: `/${d.slug}`, keywords: `${d.hook} ${d.group}` });
  }
  for (const t of getItineraries()) {
    items.push({
      kind: "Trip",
      title: t.title,
      subtitle: `${t.durationDays} days`,
      href: `/trips/${t.slug}`,
      keywords: `${t.destinations.map(destinationName).join(" ")} ${t.experiences.join(" ")}`,
    });
  }
  for (const s of getStays()) {
    items.push({
      kind: "Stay",
      title: s.name,
      subtitle: `${stayTypeLabel[s.type]} · ${destinationName(s.destination)}`,
      href: `/stays/${s.slug}`,
      keywords: `${s.area} ${s.type}`,
    });
  }
  for (const e of getExperiences()) {
    items.push({ kind: "Experience", title: e.name, href: `/experiences/${e.slug}`, keywords: `${e.hook} ${e.destinations.join(" ")}` });
  }
  for (const p of getPosts()) {
    items.push({ kind: "Article", title: p.title, subtitle: p.category, href: `/blog/${p.slug}`, keywords: p.excerpt });
  }
  const pages: [string, string][] = [
    ["Plan your trip", "/plan-your-trip"],
    ["Why travel with us", "/why-travel-with-us"],
    ["Our story", "/about"],
    ["Meet the team", "/about#team"],
    ["Sustainability", "/sustainability"],
    ["Private & bespoke travel", "/private-travel"],
    ["Testimonials", "/testimonials"],
    ["FAQ", "/faq"],
    ["Contact", "/contact"],
  ];
  for (const [title, href] of pages) items.push({ kind: "Page", title, href });
  return items;
}
