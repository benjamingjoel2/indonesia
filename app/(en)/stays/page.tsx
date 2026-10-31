import { getStays } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { StaysListing } from "@/components/sections/StaysListing";
import { t } from "@/lib/i18n/server";

export const generateMetadata = () => buildMetadata({
  title: "Where to stay in Indonesia",
  description:
    "Hand-picked villas, resorts, eco-lodges and phinisi liveaboards across Indonesia, each inspected by our team. Prices per person per night.",
  path: "/stays",
});

export default function StaysPage() {
  return (
    <>
      <TextHero
        eyebrow={t("Stays")}
        title={t("A curated collection of Indonesia's *finest*.")}
        intro={t("Clifftop villas, reef-side lodges and hand-built phinisi. We only recommend places we have stayed in ourselves.")}
        crumbs={[{ label: t("Stays"), href: "/stays" }]}
      />
      <section aria-labelledby="list-title" className="container-edit py-14 md:py-20">
        <h2 id="list-title" className="sr-only">{t("All stays")}</h2>
        <StaysListing stays={getStays()} />
      </section>
      <FinalCta />
    </>
  );
}
