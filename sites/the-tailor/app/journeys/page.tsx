import { getItineraries } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { TripsListing } from "@/components/sections/TripsListing";

export const metadata = buildMetadata({
  title: "Luxury Australia journeys & itineraries",
  description:
    "Private, tailor-made Australia itineraries: Red Centre to Reef, Kangaroo Island, the Kimberley, Sydney and more. Filter by region, length and style, then make it yours.",
  path: "/journeys",
});

export default function TripsPage() {
  return (
    <>
      <TextHero
        eyebrow="Journeys"
        title="Our most considered *journeys*."
        intro="Every itinerary here is a starting point, priced per person. Your Travel Designer will reshape the route, the pace and the lodges around you."
        crumbs={[{ label: "Journeys", href: "/journeys" }]}
      />
      <section aria-labelledby="list-title" className="container-edit py-14 md:py-20">
        <h2 id="list-title" className="sr-only">All journeys</h2>
        <TripsListing trips={getItineraries()} />
      </section>
      <FinalCta heading="Don't see quite the *right* journey?" text="Most of our journeys are designed from scratch. Tell us what you have in mind." />
    </>
  );
}
