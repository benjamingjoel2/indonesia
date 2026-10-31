import { buildMetadata } from "@/lib/seo";
import { home as homeEn } from "@/data/home";
import { site } from "@/data/site";
import { getLocale, lhref, t, tx } from "@/lib/i18n/server";
import {
  getDestinationsBySlugs,
  getExperiencesBySlugs,
  getFeaturedItineraries,
  getFeaturedStays,
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
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeader } from "@/components/ui/Section";

const homeTitle = `${site.name} — Tailor-made Indonesia journeys`;

export const generateMetadata = () => buildMetadata({ title: homeTitle, description: site.description, path: "/", absolute: true });

/** Business and website details for search engines (schema.org). */
function homeJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      description: t(site.description),
      logo: `${site.url}/icon.svg`,
      image: `${site.url}/opengraph-image`,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${site.address.name}, ${site.address.street}`,
        addressLocality: site.address.locality,
        postalCode: site.address.postalCode,
        addressCountry: site.address.countryCode,
      },
      areaServed: { "@type": "Country", name: "Indonesia" },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: getLocale(),
      mainEntityOfPage: site.url + lhref("/").replace(/^\/$/, ""),
    },
  ];
}

export default function HomePage() {
  const home = tx(homeEn);
  const destinations = getDestinationsBySlugs(home.destinations.slugs);
  const experiences = getExperiencesBySlugs(home.experiences.slugs);
  const journeys = getFeaturedItineraries().slice(0, 4);
  const stays = getFeaturedStays().slice(0, 4);

  return (
    <>
      <JsonLd data={homeJsonLd()} />
      <Hero />
      <ValueProps />

      <Section labelledBy="where-title">
        <SectionHeader
          id="where-title"
          heading={home.destinations.heading}
          intro={home.destinations.intro}
          link={{ href: "/destinations", label: t("All destinations") }}
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
          link={{ href: "/experiences", label: t("All experiences") }}
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
          link={{ href: "/trips", label: t("All trips") }}
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
          link={{ href: "/stays", label: t("All stays") }}
        />
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stays.map((s) => (
            <StayCard key={s.slug} s={s} />
          ))}
        </div>
      </Section>

      <WhyUs />
      <BrochureSignup />
      <FinalCta />
    </>
  );
}
