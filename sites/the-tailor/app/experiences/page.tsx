import { getExperiences } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";

export const metadata = buildMetadata({
  title: "Luxury Australia travel experiences",
  description:
    "Wildlife safaris, the Reef, the outback by air, food and wine, family journeys and honeymoons. Find the kind of Australian journey that suits you.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <>
      <TextHero
        eyebrow="Experiences"
        title="By the kind of *journey*."
        intro="Start with how you want to spend your days. We'll find the islands, the season and the stays that fit."
        crumbs={[{ label: "Experiences", href: "/experiences" }]}
      />
      <section aria-labelledby="list-title" className="container-edit py-16 md:py-24">
        <h2 id="list-title" className="sr-only">All experiences</h2>
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
