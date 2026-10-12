"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useFocusTrap, useScrollLock } from "@/lib/hooks";
import { searchItems, type SearchItem, type SearchKind } from "@/lib/search";
import { useUi } from "@/lib/ui-state";
import { Icon } from "@/components/ui/Icon";

const order: SearchKind[] = ["Destination", "Trip", "Stay", "Experience", "Article", "Page"];
const plural: Record<SearchKind, string> = {
  Destination: "Destinations",
  Trip: "Trips",
  Stay: "Stays",
  Experience: "Experiences",
  Article: "From the journal",
  Page: "Pages",
};
const suggestions = ["Bali", "Komodo", "Raja Ampat", "Honeymoon", "Phinisi", "Orangutan"];

export function SearchOverlay({ index }: { index: SearchItem[] }) {
  const { searchOpen, closeSearch } = useUi();
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listId = useId();

  useScrollLock(searchOpen);
  useFocusTrap(panelRef, searchOpen, closeSearch);

  useEffect(() => {
    if (searchOpen) {
      setQuery("");
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [searchOpen]);

  const results = useMemo(() => searchItems(index, query), [index, query]);
  const grouped = useMemo(
    () =>
      order
        .map((kind) => ({ kind, items: results.filter((r) => r.kind === kind) }))
        .filter((g) => g.items.length > 0),
    [results],
  );
  // Flattened in display order, for keyboard navigation.
  const flat = useMemo(() => grouped.flatMap((g) => g.items), [grouped]);

  useEffect(() => setActive(0), [query]);

  if (!searchOpen) return null;

  const go = (item: SearchItem) => {
    closeSearch();
    router.push(item.href);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && flat[active]) {
      e.preventDefault();
      go(flat[active]);
    }
  };

  const optionId = (i: number) => `${listId}-opt-${i}`;

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close search"
        onClick={closeSearch}
        className="absolute inset-0 h-full w-full animate-fade-in bg-jungle-950/60 backdrop-blur-sm"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Search The Island Edit"
        className="relative mx-auto mt-0 flex max-h-[100dvh] w-full max-w-3xl animate-fade-in flex-col bg-paper sm:mt-[10vh] sm:max-h-[75vh] sm:rounded-sm sm:shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-sand-300 px-5 py-4">
          <Icon name="search" className="shrink-0 text-ink-soft" />
          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-expanded={flat.length > 0}
            aria-controls={listId}
            aria-activedescendant={flat[active] ? optionId(active) : undefined}
            aria-autocomplete="list"
            aria-label="Search destinations, trips, stays, experiences and articles"
            placeholder="Search destinations, stays, experiences…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            className="min-w-0 flex-1 bg-transparent font-display text-xl outline-none placeholder:text-ink-soft/60 sm:text-2xl [&::-webkit-search-cancel-button]:hidden"
          />
          <kbd className="hidden rounded-sm border border-sand-300 px-1.5 py-0.5 text-xs text-ink-soft sm:inline">Esc</kbd>
          <button
            type="button"
            onClick={closeSearch}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm hover:bg-sand-100 sm:hidden"
            aria-label="Close search"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5">
          {query.trim() === "" ? (
            <div>
              <p className="eyebrow mb-3 text-ink-soft">Popular searches</p>
              <ul className="flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => setQuery(s)}
                      className="rounded-full border border-sand-300 px-4 py-2 text-sm hover:border-jungle-900"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : flat.length === 0 ? (
            <div className="py-6 text-center">
              <p className="font-display text-xl">Nothing found for “{query}”.</p>
              <p className="mt-2 text-sm text-ink-soft">
                Try a place or a kind of trip, or{" "}
                <Link href="/plan-your-trip" onClick={closeSearch} className="underline underline-offset-4">
                  ask a specialist
                </Link>
                .
              </p>
            </div>
          ) : (
            <ul id={listId} role="listbox" aria-label="Search results" className="space-y-6">
              {grouped.map((g) => (
                <li key={g.kind} role="presentation">
                  <p className="eyebrow mb-2 text-ink-soft" aria-hidden="true">
                    {plural[g.kind]}
                  </p>
                  <ul role="group" aria-label={plural[g.kind]}>
                    {g.items.map((item) => {
                      const i = flat.indexOf(item);
                      const isActive = i === active;
                      return (
                        <li
                          key={`${item.kind}-${item.href}`}
                          id={optionId(i)}
                          role="option"
                          aria-selected={isActive}
                          onMouseEnter={() => setActive(i)}
                          onClick={() => go(item)}
                          className={`flex cursor-pointer items-center justify-between gap-4 rounded-sm px-3 py-2.5 ${
                            isActive ? "bg-sand-100" : ""
                          }`}
                        >
                          <span>
                            <span className="font-display text-lg">{item.title}</span>
                            {item.subtitle && (
                              <span className="ml-2 text-sm text-ink-soft">{item.subtitle}</span>
                            )}
                          </span>
                          <Icon name="arrow" size={16} className={isActive ? "" : "opacity-0"} />
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
