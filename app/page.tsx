import type { Metadata } from "next";
import { home } from "@/data/home";
import { site } from "@/data/site";
import {
  getDestinationsBySlugs,
  getExperiencesBySlugs,
  getFeaturedItineraries,
  getFeaturedStays,
  getTestimonials,
} from "@/lib/data";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { ItineraryCard } from "@/components/cards/ItineraryCard";
import { StayCard } from "@/components/cards/StayCard";
import { BrochureSignup } from "@/components/sections/BrochureSignup";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { WhyUs } from "@/components/sections/WhyUs";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Tailor-made Indonesia journeys` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const destinations = getDestinationsBySlugs(home.destinations.slugs);
  const experiences = getExperiencesBySlugs(home.experiences.slugs);
  const journeys = getFeaturedItineraries().slice(0, 4);
  const stays = getFeaturedStays().slice(0, 4);
  const testimonial = getTestimonials()[0];

  return (
    <>
      <Hero />
      <ValueProps />

      <Section labelledBy="where-title">
        <SectionHeader
          id="where-title"
          heading={home.destinations.heading}
          intro={home.destinations.intro}
          link={{ href: "/destinations", label: "All destinations" }}
        />
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => (
            <DestinationCard key={d.slug} d={d} />
          ))}
        </div>
      </Section>

      <Section tone="sand" labelledBy="kind-title">
        <SectionHeader
          id="kind-title"
          heading={home.experiences.heading}
          intro={home.experiences.intro}
          link={{ href: "/experiences", label: "All experiences" }}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {experiences.map((e) => (
            <ExperienceCard key={e.slug} e={e} />
          ))}
        </div>
      </Section>

      <Section labelledBy="journeys-title">
        <SectionHeader
          id="journeys-title"
          heading={home.journeys.heading}
          intro={home.journeys.intro}
          link={{ href: "/trips", label: "All trips" }}
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {journeys.map((it) => (
            <ItineraryCard key={it.slug} it={it} />
          ))}
        </div>
      </Section>

      <Section tone="sand" labelledBy="stays-title" className="!bg-sand-50">
        <SectionHeader
          id="stays-title"
          heading={home.stays.heading}
          intro={home.stays.intro}
          link={{ href: "/stays", label: "All stays" }}
        />
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stays.map((s) => (
            <StayCard key={s.slug} s={s} />
          ))}
        </div>
      </Section>

      <WhyUs testimonial={testimonial} />
      <BrochureSignup />
      <FinalCta />
    </>
  );
}
