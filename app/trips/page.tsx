import { getItineraries } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { TripsListing } from "@/components/sections/TripsListing";

export const metadata = buildMetadata({
  title: "Indonesia trips & sample itineraries",
  description:
    "Tailor-made Indonesia itineraries: Bali, Komodo by phinisi, Raja Ampat diving, Java overland and more. Filter by region, duration and budget, then make it yours.",
  path: "/trips",
});

export default function TripsPage() {
  return (
    <>
      <TextHero
        eyebrow="Trips"
        title="Our most considered *journeys*."
        intro="Every itinerary here is a starting point, priced honestly per person. Your specialist will reshape the route, the pace and the stays around you."
        crumbs={[{ label: "Trips", href: "/trips" }]}
      />
      <section aria-labelledby="list-title" className="container-edit py-14 md:py-20">
        <h2 id="list-title" className="sr-only">All trips</h2>
        <TripsListing trips={getItineraries()} />
      </section>
      <FinalCta heading="Don't see quite the *right* trip?" text="Most of our journeys are designed from scratch. Tell us what you have in mind." />
    </>
  );
}
