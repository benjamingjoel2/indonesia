import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getDestinationsBySlugs,
  getExperience,
  getExperiences,
  getItinerariesForExperience,
} from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { ItineraryCard } from "@/components/cards/ItineraryCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { FaqList } from "@/components/ui/Accordion";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { PlanButton } from "@/components/ui/PlanButton";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getExperiences().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const e = getExperience((await params).slug);
  if (!e) return {};
  return buildMetadata({ title: e.seo.title, description: e.seo.description, path: `/experiences/${e.slug}`, image: e.heroImage.src });
}

export default async function ExperiencePage({ params }: Props) {
  const e = getExperience((await params).slug);
  if (!e) notFound();
  const trips = getItinerariesForExperience(e.slug);
  const places = getDestinationsBySlugs(e.destinations).slice(0, 4);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: e.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <PageHero
        image={e.heroImage}
        eyebrow={`Experiences · ${e.tripCount} journeys`}
        title={e.name}
        tagline={e.hook}
        crumbs={[
          { label: "Experiences", href: "/experiences" },
          { label: e.name, href: `/experiences/${e.slug}` },
        ]}
      >
        <PlanButton variant="light" arrow>
          Enquire
        </PlanButton>
      </PageHero>

      <section className="container-edit grid gap-12 py-20 md:py-28 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <p className="font-display text-display-sm leading-snug">{e.intro}</p>
        <ul className="space-y-4">
          {e.highlights.map((h) => (
            <li key={h} className="flex gap-3 border-b border-sand-300 pb-4">
              <Icon name="check" size={18} className="mt-0.5 shrink-0 text-lagoon-500" />
              {h}
            </li>
          ))}
        </ul>
      </section>

      {trips.length > 0 && (
        <section aria-labelledby="trips-title" className="bg-sand-50 py-20 md:py-28">
          <div className="container-edit">
            <Heading id="trips-title" size="xl" className="mb-10">
              {"Sample *journeys*"}
            </Heading>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {trips.map((t) => (
                <ItineraryCard key={t.slug} it={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section aria-labelledby="where-title" className="py-20 md:py-28">
        <div className="container-edit">
          <Heading id="where-title" size="xl" className="mb-10">
            {"Where to *go*."}
          </Heading>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {places.map((d) => (
              <DestinationCard key={d.slug} d={d} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="container-edit grid gap-10 pb-20 md:pb-28 lg:grid-cols-[1fr_2fr]">
        <Heading id="faq-title" size="lg">
          {"Good to *know*"}
        </Heading>
        <FaqList items={e.faqs} />
      </section>

      <FinalCta />
    </>
  );
}
