import { getExperiences } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { t } from "@/lib/i18n/server";

export const generateMetadata = () => buildMetadata({
  title: "Indonesia travel experiences",
  description:
    "Diving, phinisi cruises, honeymoons, volcano treks, orangutans, temples, surf and wellness. Find the kind of Indonesia trip that suits you.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <>
      <TextHero
        eyebrow={t("Experiences")}
        title={t("By the kind of *trip*.")}
        intro={t("Start with how you want to spend your days. We'll find the islands, the season and the stays that fit.")}
        crumbs={[{ label: t("Experiences"), href: "/experiences" }]}
      />
      <section aria-labelledby="list-title" className="container-edit py-16 md:py-24">
        <h2 id="list-title" className="sr-only">{t("All experiences")}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {getExperiences().map((e) => (
            <ExperienceCard key={e.slug} e={e} />
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
