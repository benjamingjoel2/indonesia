import { getStays } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { StaysListing } from "@/components/sections/StaysListing";

export const metadata = buildMetadata({
  title: "Where to stay in Indonesia",
  description:
    "Hand-picked villas, resorts, eco-lodges and phinisi liveaboards across Indonesia, each inspected by our team. Prices per person per night.",
  path: "/stays",
});

export default function StaysPage() {
  return (
    <>
      <TextHero
        eyebrow="Stays"
        title="A curated collection of Indonesia's *finest*."
        intro="Clifftop villas, reef-side lodges and hand-built phinisi. We only recommend places we have stayed in ourselves."
        crumbs={[{ label: "Stays", href: "/stays" }]}
      />
      <section aria-label="All stays" className="container-edit py-14 md:py-20">
        <StaysListing stays={getStays()} />
      </section>
      <FinalCta />
    </>
  );
}
