import type { Stay } from "@/data/types";
import { destinationName, stayTypeLabel, tierLabel } from "@/lib/data";
import { StayCard } from "@/components/cards/StayCard";
import { FilterableGrid, type FilterFacet } from "./FilterableGrid";
import { t } from "@/lib/i18n/server";

export function StaysListing({ stays, showRegion = true }: { stays: Stay[]; showRegion?: boolean }) {
  const facets: FilterFacet[] = [
    {
      id: "tier",
      label: t("Budget"),
      options: (["value", "premium", "ultra"] as const)
        .filter((tier) => stays.some((s) => s.tier === tier))
        .map((tier) => ({ value: tier, label: t(tierLabel[tier]) })),
    },
    {
      id: "type",
      label: t("Type"),
      options: Array.from(new Set(stays.map((s) => s.type))).map((type) => ({ value: type, label: t(stayTypeLabel[type]) })),
    },
  ];
  const regions = Array.from(new Set(stays.map((s) => s.destination)));
  if (showRegion && regions.length > 1) {
    facets.unshift({ id: "region", label: t("Region"), options: regions.map((r) => ({ value: r, label: destinationName(r) })) });
  }
  return (
    <FilterableGrid
      facets={facets}
      noun={[t("stay"), t("stays")]}
      gridClass="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      sorts={[
        { id: "recommended", label: t("Recommended") },
        { id: "price", label: t("Price: low to high") },
        { id: "priceDesc", label: t("Price: high to low"), dir: "desc" },
      ]}
      entries={stays.map((s) => ({
        key: s.slug,
        facets: { tier: [s.tier], type: [s.type], region: [s.destination] },
        sort: { price: s.priceFromUSD, priceDesc: s.priceFromUSD },
      }))}
      cards={Object.fromEntries(stays.map((s) => [s.slug, <StayCard key={s.slug} s={s} />]))}
    />
  );
}
