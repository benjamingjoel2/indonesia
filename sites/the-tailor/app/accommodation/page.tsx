import { getStays } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { StaysListing } from "@/components/sections/StaysListing";

export const metadata = buildMetadata({
  title: "Luxury lodges & places to stay in Australia",
  description:
    "Australia's finest lodges, island resorts and safari camps, each known personally by our Travel Designers. Indicative prices per person per night.",
  path: "/accommodation",
});

export default function StaysPage() {
  return (
    <>
      <TextHero
        eyebrow="Accommodation"
        title="Australia's finest places to *stay*."
        intro="Clifftop lodges, private islands and safari camps under desert skies, chosen for setting, service and the experiences around them."
        crumbs={[{ label: "Accommodation", href: "/accommodation" }]}
      />
      <section aria-labelledby="list-title" className="container-edit py-14 md:py-20">
        <h2 id="list-title" className="sr-only">All accommodation</h2>
        <StaysListing stays={getStays()} />
      </section>
      <FinalCta />
    </>
  );
}
