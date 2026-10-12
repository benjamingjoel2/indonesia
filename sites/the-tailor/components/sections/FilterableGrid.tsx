"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

/**
 * Generic chip-filter grid. Cards are rendered on the server and passed in by
 * key, so the client bundle only carries the small filter facets.
 */
export interface FilterFacet {
  id: string;
  label: string;
  options: { value: string; label: string }[];
}

export interface FilterEntry {
  key: string;
  /** facet id → values this entry matches */
  facets: Record<string, string[]>;
  sort: Record<string, number>;
}

export interface SortOption {
  id: string;
  label: string;
  dir?: "asc" | "desc";
}

export function FilterableGrid({
  facets,
  entries,
  cards,
  sorts,
  noun,
  gridClass = "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
  pageSize = 9,
  empty,
}: {
  facets: FilterFacet[];
  entries: FilterEntry[];
  cards: Record<string, ReactNode>;
  sorts: SortOption[];
  noun: [string, string];
  gridClass?: string;
  pageSize?: number;
  empty?: ReactNode;
}) {
  const [selected, setSelected] = useState<Record<string, string[]>>({});
  const [sort, setSort] = useState(sorts[0]?.id);
  const [shown, setShown] = useState(pageSize);

  const toggle = (facet: string, value: string) => {
    setShown(pageSize);
    setSelected((s) => {
      const cur = new Set(s[facet] ?? []);
      if (cur.has(value)) cur.delete(value);
      else cur.add(value);
      return { ...s, [facet]: Array.from(cur) };
    });
  };
  const clear = () => {
    setSelected({});
    setShown(pageSize);
  };

  const active = Object.values(selected).flat().length;

  const results = useMemo(() => {
    const filtered = entries.filter((e) =>
      facets.every((f) => {
        const sel = selected[f.id] ?? [];
        return sel.length === 0 || sel.some((v) => e.facets[f.id]?.includes(v));
      }),
    );
    const s = sorts.find((x) => x.id === sort);
    if (s && s.id !== "recommended") {
      filtered.sort((a, b) => (s.dir === "desc" ? b.sort[s.id] - a.sort[s.id] : a.sort[s.id] - b.sort[s.id]));
    }
    return filtered;
  }, [entries, facets, selected, sort, sorts]);

  const summary = facets
    .flatMap((f) => (selected[f.id] ?? []).map((v) => f.options.find((o) => o.value === v)?.label))
    .filter(Boolean)
    .join(", ");

  return (
    <div>
      <div className="space-y-4 border-y border-sand-300 py-5">
        {facets.map((f) => (
          <div
            key={f.id}
            role="group"
            aria-labelledby={`facet-${f.id}`}
            className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4"
          >
            <p id={`facet-${f.id}`} className="eyebrow w-28 shrink-0 text-ink-soft">
              {f.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {f.options.map((o) => {
                const on = (selected[f.id] ?? []).includes(o.value);
                return (
                  <button
                    key={o.value}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(f.id, o.value)}
                    className={`inline-flex min-h-9 items-center gap-1.5 rounded-full border px-4 text-sm transition-colors ${
                      on ? "border-jungle-900 bg-jungle-900 text-sand-50" : "border-sand-400 hover:border-jungle-900"
                    }`}
                  >
                    {on && <Icon name="check" size={13} />}
                    {o.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <p className="text-sm text-ink-soft" aria-live="polite">
            <span className="font-medium text-ink">
              {results.length} {results.length === 1 ? noun[0] : noun[1]}
            </span>
            {summary ? ` · Your search: ${summary}` : ""}
          </p>
          <div className="flex items-center gap-3">
            {active > 0 && (
              <button type="button" onClick={clear} className="text-sm underline underline-offset-4">
                Clear filters
              </button>
            )}
            <label className="flex items-center gap-2 text-sm">
              <span className="text-ink-soft">Sort</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-9 rounded-sm border border-sand-400 bg-paper px-2"
              >
                {sorts.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="py-16 text-center">
          <p className="font-display text-display-sm">
            No {noun[1]} match <em className="font-light italic">all</em> of those filters.
          </p>
          <p className="mt-2 text-ink-soft">Try removing one, or ask us to design something around them.</p>
          <div className="mt-6 flex justify-center gap-3">
            <button type="button" onClick={clear} className="text-sm underline underline-offset-4">
              Clear filters
            </button>
          </div>
          {empty}
        </div>
      ) : (
        <>
          <ul className={`mt-10 ${gridClass}`}>
            {results.slice(0, shown).map((e) => (
              <li key={e.key}>{cards[e.key]}</li>
            ))}
          </ul>
          {results.length > shown && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setShown((n) => n + pageSize)}
                className="inline-flex min-h-11 items-center rounded-sm border border-jungle-900 px-6 text-[0.8125rem] font-medium hover:bg-jungle-900 hover:text-sand-50"
              >
                Show more
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
