export type SearchKind = "Destination" | "Trip" | "Stay" | "Experience" | "Article" | "Page";

export interface SearchItem {
  kind: SearchKind;
  title: string;
  subtitle?: string;
  href: string;
  /** Extra lowercase text to match against. */
  keywords?: string;
}

const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Token match with simple ranking: title prefix > title word > title contains > other text. */
export function searchItems(index: SearchItem[], query: string, limit = 24): SearchItem[] {
  const tokens = normalize(query).split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];
  const scored: { item: SearchItem; score: number }[] = [];
  for (const item of index) {
    const title = normalize(item.title);
    const hay = `${title} ${normalize(item.subtitle ?? "")} ${normalize(item.keywords ?? "")}`;
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
