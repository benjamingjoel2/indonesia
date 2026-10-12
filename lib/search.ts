import { destinationsMenu, experiencesMenu } from "@/data/site";

export type SearchKind = "Destination" | "Trip" | "Stay" | "Experience" | "Article" | "Page";

export interface SearchItem {
  kind: SearchKind;
  title: string;
  subtitle?: string;
  href: string;
  /** Extra lowercase text to match against. */
  keywords?: string;
}

/**
 * Builds the site search index on the server. Runs at build time and is passed
 * to the client overlay as a prop.
 */
export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const group of destinationsMenu) {
    for (const l of group.links) {
      items.push({ kind: "Destination", title: l.label, subtitle: group.title, href: l.href });
    }
  }
  for (const l of experiencesMenu) {
    items.push({ kind: "Experience", title: l.label, href: l.href });
  }

  const pages: [string, string][] = [
    ["Plan your trip", "/plan-your-trip"],
    ["All trips", "/trips"],
    ["Why travel with us", "/why-travel-with-us"],
    ["Our story", "/about"],
    ["FAQ", "/faq"],
    ["Contact", "/contact"],
    ["Blog", "/blog"],
  ];
  for (const [title, href] of pages) items.push({ kind: "Page", title, href });

  return items;
}

const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Token match with simple ranking: title prefix > title contains > keywords. */
export function searchItems(index: SearchItem[], query: string, limit = 24): SearchItem[] {
  const tokens = normalize(query).split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];
  const scored: { item: SearchItem; score: number }[] = [];
  for (const item of index) {
    const title = normalize(item.title);
    const hay = `${title} ${normalize(item.subtitle ?? "")} ${item.keywords ?? ""}`;
    if (!tokens.every((t) => hay.includes(t))) continue;
    let score = 0;
    for (const t of tokens) {
      if (title.startsWith(t)) score += 4;
      else if (title.includes(` ${t}`)) score += 3;
      else if (title.includes(t)) score += 2;
      else score += 1;
    }
    scored.push({ item, score });
  }
  return scored
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map((s) => s.item);
}
