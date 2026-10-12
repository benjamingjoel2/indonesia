import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import {
  getDestination,
  getDestinations,
  getItinerariesForDestination,
  getStaysForDestination,
  relatedExperiences,
} from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { BrochureSignup } from "@/components/sections/BrochureSignup";
import { CalloutCards } from "@/components/sections/CalloutCards";
import { FinalCta } from "@/components/sections/FinalCta";
import { Gallery } from "@/components/sections/Gallery";
import { MonthGrid } from "@/components/sections/MonthGrid";
import { PageHero } from "@/components/sections/PageHero";
import { StaysListing } from "@/components/sections/StaysListing";
import { TripsListing } from "@/components/sections/TripsListing";
import { FaqList } from "@/components/ui/Accordion";
import { LinkButton, buttonClass } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { JsonLd } from "@/components/ui/JsonLd";
import { JumpNav } from "@/components/ui/JumpNav";
import { PlanButton } from "@/components/ui/PlanButton";

type Props = { params: Promise<{ destination: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getDestinations().map((d) => ({ destination: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = getDestination((await params).destination);
  if (!d) return {};
  return buildMetadata({ title: d.seo.title, description: d.seo.description, path: `/${d.slug}`, image: d.heroImage.src });
}

export default async function DestinationPage({ params }: Props) {
  const d = getDestination((await params).destination);
  if (!d) notFound();

  const trips = getItinerariesForDestination(d.slug);
  const stays = getStaysForDestination(d.slug);
  const experiences = relatedExperiences(d).slice(0, 3);

  const jump = [
    { id: "overview", label: "Overview" },
    ...(trips.length ? [{ id: "trips", label: "Journeys" }] : []),
    ...(stays.length ? [{ id: "stays", label: "Where to stay" }] : []),
    { id: "when-to-go", label: "When to go" },
    { id: "questions", label: "Questions" },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: d.name,
          description: d.tagline,
          image: d.heroImage.src,
          url: `${site.url}/${d.slug}`,
          containedInPlace: { "@type": "Country", name: d.group === "beyond" ? d.name : "Australia" },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: d.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />

      <PageHero
        image={d.heroImage}
        eyebrow={d.group === "beyond" ? d.region : `Australia · ${d.region}`}
        title={d.name}
        tagline={d.tagline}
        crumbs={[
          { label: "Destinations", href: "/destinations" },
          { label: d.name, href: `/${d.slug}` },
        ]}
      >
        {trips.length > 0 && (
          <a href="#trips" className={buttonClass("light")}>
            Explore the journeys
          </a>
        )}
        <a href={stays.length ? "#stays" : "#when-to-go"} className={buttonClass("outline-light")}>
          {stays.length ? "Where to stay" : "When to go"}
        </a>
      </PageHero>

      <JumpNav items={jump} />

      {/* Overview */}
      <section id="overview" className="container-edit grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_20rem] lg:gap-20">
        <div>
          <Heading size="lg">{d.overview.heading}</Heading>
          <div className="mt-8 max-w-[65ch] space-y-5 text-lg leading-relaxed text-ink-soft">
            {d.overview.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <h3 className="mt-14 font-display text-display-sm">Highlights</h3>
          <ul className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {d.highlights.map((h, i) => (
              <li key={h.title} className="border-t border-sand-300 pt-5">
                <span className="font-display text-sm italic text-lagoon-500">0{i + 1}</span>
                <p className="mt-1 font-display text-xl">{h.title}</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{h.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 rounded-sm bg-sand-100 p-6">
            <p className="eyebrow text-lagoon-500">Getting there</p>
            <p className="mt-2 leading-relaxed">{d.gettingThere}</p>
          </div>
        </div>
        <aside aria-label="Travelling with us">
          <div className="lg:sticky lg:top-40">
            <CalloutCards />
          </div>
        </aside>
      </section>

      {d.gallery.length > 0 && (
        <section aria-label={`${d.name} gallery`} className="container-edit pb-20 md:pb-28">
          <Gallery images={d.gallery} />
        </section>
      )}

      {trips.length > 0 && (
        <section id="trips" aria-labelledby="trips-title" className="bg-sand-50 py-20 md:py-28">
          <div className="container-edit">
            <Heading id="trips-title" size="xl" className="mb-10">
              {`Journeys including *${d.name}*`}
            </Heading>
            <TripsListing trips={trips} gridClass="grid gap-6 md:grid-cols-2 xl:grid-cols-3" />
          </div>
        </section>
      )}

      <BrochureSignup />

      {stays.length > 0 && (
        <section id="stays" aria-labelledby="stays-title" className="py-20 md:py-28">
          <div className="container-edit">
            <Heading id="stays-title" size="xl" className="mb-4">
              {`Where to stay in *${d.name}*`}
            </Heading>
            <p className="mb-10 max-w-2xl text-lg text-ink-soft">
              We work with {d.partnerStays} places to stay here. A few favourites are below; your Travel Designer will
              match the rest to your journey.
            </p>
            <StaysListing stays={stays} showRegion={false} />
          </div>
        </section>
      )}

      <section id="when-to-go" aria-labelledby="when-title" className="bg-sand-100 py-20 md:py-28">
        <div className="container-edit">
          <Heading id="when-title" size="xl">
            {`When to *go*`}
          </Heading>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{d.bestTimeSummary}</p>
          <div className="mt-10">
            <MonthGrid ratings={d.bestTime} />
          </div>
        </div>
      </section>

      {experiences.length > 0 && (
        <section aria-labelledby="exp-title" className="py-20 md:py-28">
          <div className="container-edit">
            <Heading id="exp-title" size="lg" className="mb-10">
              {`Ways to experience *${d.name}*`}
            </Heading>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {experiences.map((e) => (
                <ExperienceCard key={e.slug} e={e} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="questions" aria-labelledby="faq-title" className="container-edit grid gap-10 py-20 md:py-28 lg:grid-cols-[1fr_2fr]">
        <div>
          <Heading id="faq-title" size="lg">
            {`${d.name}, *answered*.`}
          </Heading>
          <p className="mt-4 text-ink-soft">Something we haven&apos;t covered? Your Travel Designer will know.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PlanButton arrow>Ask a Travel Designer</PlanButton>
            <LinkButton href="/faq" variant="ghost">
              All FAQs
            </LinkButton>
          </div>
        </div>
        <FaqList items={d.faqs} />
      </section>

      <FinalCta heading={`Plan your *${d.name}* journey.`} />
    </>
  );
}
