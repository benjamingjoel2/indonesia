import type { Itinerary, Slug } from "@/data/types";
import { destinationName, tierLabel } from "@/lib/data";
import { ItineraryCard } from "@/components/cards/ItineraryCard";
import { FilterableGrid, type FilterFacet } from "./FilterableGrid";
import { t } from "@/lib/i18n/server";

const durationBucket = (days: number) => (days <= 7 ? "short" : days <= 11 ? "mid" : "long");

/** Server wrapper: renders cards and hands facets to the client filter. */
export function TripsListing({
  trips,
  showRegion = true,
  gridClass,
}: {
  trips: Itinerary[];
  showRegion?: boolean;
  gridClass?: string;
}) {
  const regionSlugs = Array.from(new Set(trips.flatMap((t) => t.destinations))) as Slug[];
  const facets: FilterFacet[] = [];
  if (showRegion && regionSlugs.length > 1) {
    facets.push({
      id: "region",
      label: t("Region"),
      options: regionSlugs.map((s) => ({ value: s, label: destinationName(s) })),
    });
  }
  facets.push(
    {
      id: "duration",
      label: t("Duration"),
      options: [
        { value: "short", label: t("Up to 7 days") },
        { value: "mid", label: t("8–11 days") },
        { value: "long", label: t("12+ days") },
      ],
    },
    {
      id: "budget",
      label: t("Budget"),
      options: (["value", "premium", "ultra"] as const).map((tier) => ({ value: tier, label: t(tierLabel[tier]) })),
    },
  );

  return (
    <FilterableGrid
      facets={facets}
      noun={[t("trip"), t("trips")]}
      gridClass={gridClass}
      sorts={[
        { id: "recommended", label: t("Recommended") },
        { id: "price", label: t("Price: low to high") },
        { id: "priceDesc", label: t("Price: high to low"), dir: "desc" },
        { id: "days", label: t("Shortest first") },
      ]}
      entries={trips.map((t) => ({
        key: t.slug,
        facets: { region: t.destinations, duration: [durationBucket(t.durationDays)], budget: [t.budgetTier] },
        sort: { price: t.priceFromUSD, priceDesc: t.priceFromUSD, days: t.durationDays },
      }))}
      cards={Object.fromEntries(trips.map((t) => [t.slug, <ItineraryCard key={t.slug} it={t} />]))}
    />
  );
}
