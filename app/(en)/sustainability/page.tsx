import { sustainability as sustainabilityEn } from "@/data/pages";
import { buildMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { t, tx } from "@/lib/i18n/server";

export const generateMetadata = () => buildMetadata({
  title: "Sustainability",
  description: "How The Island Edit supports local owners, fair pay for guides and crews, reef and forest protection, and responsible wildlife travel in Indonesia.",
  path: "/sustainability",
});

export default function SustainabilityPage() {
  const sustainability = tx(sustainabilityEn);
  return (
    <>
      <TextHero
        eyebrow={t("Sustainability")}
        title={t("Travel that leaves the islands *better*.")}
        intro={sustainability.intro}
        crumbs={[{ label: t("Sustainability"), href: "/sustainability" }]}
      />
      <section aria-label={t("Our commitments")} className="container-edit py-20 md:py-28">
        <ul className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {sustainability.commitments.map((c, i) => (
            <li key={c.title} className="border-t border-sand-300 pt-5">
              <span className="font-display text-sm italic text-lagoon-500">0{i + 1}</span>
              <h2 className="mt-1 font-display text-display-sm">{c.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{c.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <FinalCta />
    </>
  );
}
