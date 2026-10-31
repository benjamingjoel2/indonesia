import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import {
  destinationName,
  getDestination,
  getItineraries,
  getStay,
  getStays,
  stayTypeLabel,
  tierLabel,
} from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { ItineraryCard } from "@/components/cards/ItineraryCard";
import { StayCard } from "@/components/cards/StayCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { Gallery } from "@/components/sections/Gallery";
import { PageHero } from "@/components/sections/PageHero";
import { ArrowLink } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { PlanButton } from "@/components/ui/PlanButton";
import { Price } from "@/components/ui/Price";
import { lhref, t } from "@/lib/i18n/server";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getStays().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getStay((await params).slug);
  if (!s) return {};
  return buildMetadata({ title: s.seo.title, description: s.seo.description, path: `/stays/${s.slug}`, image: s.heroImage.src });
}

export default async function StayPage({ params }: Props) {
  const s = getStay((await params).slug);
  if (!s) notFound();
  const dest = getDestination(s.destination);
  const trips = getItineraries().filter((i) => i.days.some((d) => d.stay === s.slug));
  const nearby = getStays().filter((o) => o.slug !== s.slug && o.destination === s.destination).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": s.type === "phinisi" ? "Product" : "LodgingBusiness",
          name: s.name,
          description: s.summary,
          image: s.heroImage.src,
          url: `${site.url}${lhref(`/stays/${s.slug}`)}`,
          ...(s.type === "phinisi"
            ? {}
            : { address: { "@type": "PostalAddress", addressRegion: s.area, addressCountry: "ID" }, priceRange: t(tierLabel[s.tier]) }),
        }}
      />
      <PageHero
        image={s.heroImage}
        eyebrow={`${t(stayTypeLabel[s.type])} · ${s.area} · ${destinationName(s.destination)}`}
        title={s.name}
        tagline={s.summary}
        crumbs={[
          { label: t("Stays"), href: "/stays" },
          { label: s.name, href: `/stays/${s.slug}` },
        ]}
      />

      <section className="container-edit grid gap-14 py-20 md:py-28 lg:grid-cols-[1fr_22rem] lg:gap-20">
        <div>
          <div className="max-w-[65ch] space-y-5 text-lg leading-relaxed text-ink-soft">
            {s.description.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <h2 className="mt-14 font-display text-display-sm">{t("What you'll find")}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {s.amenities.map((a) => (
              <li key={a} className="flex gap-3 text-[0.8125rem]">
                <Icon name="check" size={18} className="mt-0.5 shrink-0 text-lagoon-500" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <aside aria-label={t("Rates")}>
          <div className="rounded-sm border border-sand-300 bg-sand-50 p-6 lg:sticky lg:top-28">
            <p className="eyebrow text-lagoon-500">{t(tierLabel[s.tier])}</p>
            <p className="mt-3 text-sm text-ink-soft">{t("From")}</p>
            <p className="font-display text-display-md">
              <Price usd={s.priceFromUSD} />
            </p>
            <p className="text-sm text-ink-soft">{t("per person · night, sharing")}</p>
            <PlanButton className="mt-6 w-full" arrow>
              {t("Include in my trip")}
            </PlanButton>
            {dest && (
              <ArrowLink href={`/${dest.slug}`} className="mt-5 text-sm">
                {t("More about {name}", { name: dest.name })}
              </ArrowLink>
            )}
          </div>
        </aside>
      </section>

      <section aria-label={t("Gallery")} className="container-edit pb-20 md:pb-28">
        <Gallery images={s.gallery} />
      </section>

      {trips.length > 0 && (
        <section aria-labelledby="trips-title" className="bg-sand-50 py-20 md:py-28">
          <div className="container-edit">
            <Heading id="trips-title" size="lg" className="mb-10">
              {t("Trips that stay *here*")}
            </Heading>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {trips.map((t) => (
                <ItineraryCard key={t.slug} it={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {nearby.length > 0 && (
        <section aria-labelledby="nearby-title" className="py-20 md:py-28">
          <div className="container-edit">
            <Heading id="nearby-title" size="lg" className="mb-10">
              {t("More stays in *{name}*", { name: destinationName(s.destination) })}
            </Heading>
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((n) => (
                <StayCard key={n.slug} s={n} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
}
