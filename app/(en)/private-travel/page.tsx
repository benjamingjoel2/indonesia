import { privateTravel as privateTravelEn } from "@/data/pages";
import { buildMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { t, tx } from "@/lib/i18n/server";

export const generateMetadata = () => buildMetadata({
  title: "Private & bespoke travel",
  description: "Private phinisi charters, exclusive-use villas, celebrations and expedition journeys across Indonesia, planned by our private travel desk.",
  path: "/private-travel",
});

export default function PrivateTravelPage() {
  const privateTravel = tx(privateTravelEn);
  return (
    <>
      <TextHero
        eyebrow={t("Private travel")}
        title={t("Entirely on your *terms*.")}
        intro={privateTravel.intro}
        crumbs={[{ label: t("Private & bespoke travel"), href: "/private-travel" }]}
      />
      <section aria-label={t("What we arrange")} className="container-edit py-20 md:py-28">
        <ul className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {privateTravel.offers.map((o) => (
            <li key={o.title} className="border-t border-jungle-900 pt-6">
              <h2 className="font-display text-display-md">{o.title}</h2>
              <p className="mt-3 max-w-lg text-lg leading-relaxed text-ink-soft">{o.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <FinalCta heading={t("Tell us what you're *imagining*.")} />
    </>
  );
}
