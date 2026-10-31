import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { itineraries } from "@/data/itineraries";
import { stays } from "@/data/stays";
import type { Destination, Experience, Itinerary, Slug, Stay } from "@/data/types";
import { tx } from "@/lib/i18n/server";

/**
 * Data access layer. Pages only talk to these functions, so swapping
 * /data for a CMS later means re-implementing this file.
 * Every getter returns content in the locale of the page being rendered (see lib/i18n).
 */

function bySlug<T extends { slug: Slug }>(list: T[], slugs: Slug[]): T[] {
  return slugs.map((s) => list.find((i) => i.slug === s)).filter((i): i is T => Boolean(i));
}

export const getDestinations = () => tx(destinations);
export const getDestination = (slug: Slug) => tx(destinations.find((d) => d.slug === slug));
export const getDestinationsBySlugs = (slugs: Slug[]) => tx(bySlug(destinations, slugs));

export const getExperiences = () => tx(experiences);
export const getExperience = (slug: Slug) => tx(experiences.find((e) => e.slug === slug));
export const getExperiencesBySlugs = (slugs: Slug[]) => tx(bySlug(experiences, slugs));

export const getItineraries = () => tx(itineraries);
export const getItinerary = (slug: Slug) => tx(itineraries.find((i) => i.slug === slug));
export const getFeaturedItineraries = () => tx(itineraries.filter((i) => i.featured));
export const getItinerariesForDestination = (slug: Slug) =>
  tx(itineraries.filter((i) => i.destinations.includes(slug)));
export const getItinerariesForExperience = (slug: Slug) =>
  tx(itineraries.filter((i) => i.experiences.includes(slug)));

export const getStays = () => tx(stays);
export const getStay = (slug: Slug) => tx(stays.find((s) => s.slug === slug));
export const getFeaturedStays = () => tx(stays.filter((s) => s.featured));
export const getStaysForDestination = (slug: Slug) => tx(stays.filter((s) => s.destination === slug));


export const destinationName = (slug: Slug) => getDestination(slug)?.name ?? slug;

/** "Bali · Komodo & Labuan Bajo" */
export const destinationLabel = (slugs: Slug[]) => slugs.map(destinationName).join(" · ");

export function relatedExperiences(d: Destination): Experience[] {
  return tx(experiences.filter((e) => e.destinations.includes(d.slug)));
}

export function staysForItinerary(it: Itinerary): Stay[] {
  const slugs = Array.from(new Set(it.days.map((d) => d.stay).filter((s): s is Slug => Boolean(s))));
  return tx(bySlug(stays, slugs));
}

export { stayTypeLabel } from "./data-labels";

export const tierLabel: Record<Stay["tier"], string> = {
  value: "Value luxury",
  premium: "Premium",
  ultra: "Ultra luxury",
};
