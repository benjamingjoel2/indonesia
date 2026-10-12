import type { Stay } from "@/data/types";
import { destinationName, stayTypeLabel, tierLabel } from "@/lib/data";
import { StayCard } from "@/components/cards/StayCard";
import { FilterableGrid, type FilterFacet } from "./FilterableGrid";

export function StaysListing({ stays, showRegion = true }: { stays: Stay[]; showRegion?: boolean }) {
  const facets: FilterFacet[] = [
    {
      id: "tier",
      label: "Budget",
      options: (["value", "premium", "ultra"] as const)
        .filter((t) => stays.some((s) => s.tier === t))
        .map((t) => ({ value: t, label: tierLabel[t] })),
    },
    {
      id: "type",
      label: "Type",
      options: Array.from(new Set(stays.map((s) => s.type))).map((t) => ({ value: t, label: stayTypeLabel[t] })),
    },
  ];
  const regions = Array.from(new Set(stays.map((s) => s.destination)));
  if (showRegion && regions.length > 1) {
    facets.unshift({ id: "region", label: "Region", options: regions.map((r) => ({ value: r, label: destinationName(r) })) });
  }
  return (
    <FilterableGrid
      facets={facets}
      noun={["place to stay", "places to stay"]}
      gridClass="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      sorts={[
        { id: "recommended", label: "Recommended" },
        { id: "price", label: "Price: low to high" },
        { id: "priceDesc", label: "Price: high to low", dir: "desc" },
      ]}
      entries={stays.map((s) => ({
        key: s.slug,
        facets: { tier: [s.tier], type: [s.type], region: [s.destination] },
        sort: { price: s.priceFrom, priceDesc: s.priceFrom },
      }))}
      cards={Object.fromEntries(stays.map((s) => [s.slug, <StayCard key={s.slug} s={s} />]))}
    />
  );
}
