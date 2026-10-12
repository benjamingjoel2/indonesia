import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { itineraries } from "@/data/itineraries";
import { stays } from "@/data/stays";
import { testimonials } from "@/data/testimonials";
import type { Destination, Experience, Itinerary, Slug, Stay } from "@/data/types";

/**
 * Data access layer. Pages only talk to these functions, so swapping
 * /data for a CMS later means re-implementing this file.
 */

function bySlug<T extends { slug: Slug }>(list: T[], slugs: Slug[]): T[] {
  return slugs.map((s) => list.find((i) => i.slug === s)).filter((i): i is T => Boolean(i));
}

export const getDestinations = () => destinations;
export const getDestination = (slug: Slug) => destinations.find((d) => d.slug === slug);
export const getDestinationsBySlugs = (slugs: Slug[]) => bySlug(destinations, slugs);

export const getExperiences = () => experiences;
export const getExperience = (slug: Slug) => experiences.find((e) => e.slug === slug);
export const getExperiencesBySlugs = (slugs: Slug[]) => bySlug(experiences, slugs);

export const getItineraries = () => itineraries;
export const getItinerary = (slug: Slug) => itineraries.find((i) => i.slug === slug);
export const getFeaturedItineraries = () => itineraries.filter((i) => i.featured);
export const getItinerariesForDestination = (slug: Slug) =>
  itineraries.filter((i) => i.destinations.includes(slug));
export const getItinerariesForExperience = (slug: Slug) =>
  itineraries.filter((i) => i.experiences.includes(slug));

export const getStays = () => stays;
export const getStay = (slug: Slug) => stays.find((s) => s.slug === slug);
export const getFeaturedStays = () => stays.filter((s) => s.featured);
export const getStaysForDestination = (slug: Slug) => stays.filter((s) => s.destination === slug);

export const getTestimonials = () => testimonials;
export const getTestimonialForTrip = (slug: Slug) => testimonials.find((t) => t.trip === slug);

export const destinationName = (slug: Slug) => getDestination(slug)?.name ?? slug;

/** "Bali · Komodo & Labuan Bajo" */
export const destinationLabel = (slugs: Slug[]) => slugs.map(destinationName).join(" · ");

export function relatedExperiences(d: Destination): Experience[] {
  return experiences.filter((e) => e.destinations.includes(d.slug));
}

export function staysForItinerary(it: Itinerary): Stay[] {
  const slugs = Array.from(new Set(it.days.map((d) => d.stay).filter((s): s is Slug => Boolean(s))));
  return bySlug(stays, slugs);
}

export { stayTypeLabel } from "./data-labels";

export const tierLabel: Record<Stay["tier"], string> = {
  value: "Value luxury",
  premium: "Premium",
  ultra: "Ultra luxury",
};
