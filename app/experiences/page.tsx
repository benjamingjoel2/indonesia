import { getExperiences } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";

export const metadata = buildMetadata({
  title: "Indonesia travel experiences",
  description:
    "Diving, phinisi cruises, honeymoons, volcano treks, orangutans, temples, surf and wellness. Find the kind of Indonesia trip that suits you.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <>
      <TextHero
        eyebrow="Experiences"
        title="By the kind of *trip*."
        intro="Start with how you want to spend your days. We'll find the islands, the season and the stays that fit."
        crumbs={[{ label: "Experiences", href: "/experiences" }]}
      />
      <section aria-label="All experiences" className="container-edit py-16 md:py-24">
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
