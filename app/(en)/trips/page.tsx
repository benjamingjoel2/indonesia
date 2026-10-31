import { getItineraries } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { TripsListing } from "@/components/sections/TripsListing";
import { t } from "@/lib/i18n/server";

export const generateMetadata = () => buildMetadata({
  title: "Indonesia trips & sample itineraries",
  description:
    "Tailor-made Indonesia itineraries: Bali, Komodo by phinisi, Raja Ampat diving, Java overland and more. Filter by region, duration and budget, then make it yours.",
  path: "/trips",
});

export default function TripsPage() {
  return (
    <>
      <TextHero
        eyebrow={t("Trips")}
        title={t("Our most considered *journeys*.")}
        intro={t("Every itinerary here is a starting point, priced honestly per person. Your specialist will reshape the route, the pace and the stays around you.")}
        crumbs={[{ label: t("Trips"), href: "/trips" }]}
      />
      <section aria-labelledby="list-title" className="container-edit py-14 md:py-20">
        <h2 id="list-title" className="sr-only">{t("All trips")}</h2>
        <TripsListing trips={getItineraries()} />
      </section>
      <FinalCta heading={t("Don't see quite the *right* trip?")} text={t("Most of our journeys are designed from scratch. Tell us what you have in mind.")} />
    </>
  );
}
