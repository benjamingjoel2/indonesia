import { getPosts } from "./blog";
import { destinationName, getDestinations, getExperiences, getItineraries, getStays } from "./data";
import { stayTypeLabel } from "./data-labels";
import type { SearchItem } from "./search";
import { lhref, t } from "./i18n/server";

/** Server-only: builds the site search index; passed to the client overlay as a prop. */
export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];
  for (const d of getDestinations()) {
    items.push({ kind: "Destination", title: d.name, subtitle: d.region, href: `/${d.slug}`, keywords: `${d.hook} ${d.group}` });
  }
  for (const trip of getItineraries()) {
    items.push({
      kind: "Trip",
      title: trip.title,
      subtitle: t("{n} days", { n: trip.durationDays }),
      href: `/trips/${trip.slug}`,
      keywords: `${trip.destinations.map(destinationName).join(" ")} ${trip.experiences.join(" ")}`,
    });
  }
  for (const s of getStays()) {
    items.push({
      kind: "Stay",
      title: s.name,
      subtitle: `${t(stayTypeLabel[s.type])} · ${destinationName(s.destination)}`,
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
    ["Sustainability", "/sustainability"],
    ["Private & bespoke travel", "/private-travel"],
    ["FAQ", "/faq"],
    ["Contact", "/contact"],
  ];
  for (const [title, href] of pages) items.push({ kind: "Page", title: t(title), href });
  return items.map((i) => ({ ...i, href: lhref(i.href) }));
}
