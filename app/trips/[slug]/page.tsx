import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { team } from "@/data/team";
import type { ItineraryDay } from "@/data/types";
import {
  destinationLabel,
  getItineraries,
  getItinerary,
  getStay,
  getTestimonialForTrip,
  staysForItinerary,
  tierLabel,
} from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { ItineraryCard } from "@/components/cards/ItineraryCard";
import { StayCard } from "@/components/cards/StayCard";
import { TestimonialQuote } from "@/components/cards/TestimonialQuote";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Gallery } from "@/components/sections/Gallery";
import { MapPlaceholder } from "@/components/sections/MapPlaceholder";
import { PageHero } from "@/components/sections/PageHero";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { JumpNav } from "@/components/ui/JumpNav";
import { Price } from "@/components/ui/Price";
import { buttonClass } from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getItineraries().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const it = getItinerary((await params).slug);
  if (!it) return {};
  return buildMetadata({ title: it.seo.title, description: it.seo.description, path: `/trips/${it.slug}`, image: it.heroImage.src });
}

const dayLabel = (d: ItineraryDay) => (Array.isArray(d.day) ? `Days ${d.day[0]}–${d.day[1]}` : `Day ${d.day}`);
const mealNames = { B: "Breakfast", L: "Lunch", D: "Dinner" } as const;
const fmt = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

export default async function TripPage({ params }: Props) {
  const it = getItinerary((await params).slug);
  if (!it) notFound();

  const stays = staysForItinerary(it);
  const testimonial = getTestimonialForTrip(it.slug);
  const specialist = team[1] ?? team[0];
  const related = getItineraries()
    .filter((o) => o.slug !== it.slug && o.destinations.some((d) => it.destinations.includes(d)))
    .concat(getItineraries().filter((o) => o.slug !== it.slug))
    .filter((o, i, arr) => arr.findIndex((x) => x.slug === o.slug) === i)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: it.title,
          description: it.summary,
          image: it.heroImage.src,
          url: `${site.url}/trips/${it.slug}`,
          touristType: it.experiences,
          itinerary: {
            "@type": "ItemList",
            itemListElement: it.days.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: `${dayLabel(d)}: ${d.title}` })),
          },
          offers: { "@type": "Offer", price: it.priceFromUSD, priceCurrency: "USD", availability: "https://schema.org/InStock" },
          provider: { "@type": "TravelAgency", name: site.name, url: site.url },
        }}
      />

      <PageHero
        image={it.heroImage}
        eyebrow={`${it.durationDays} days · Indonesia · ${destinationLabel(it.destinations)}`}
        title={it.title}
        crumbs={[
          { label: "Trips", href: "/trips" },
          { label: it.title, href: `/trips/${it.slug}` },
        ]}
      >
        <a href="#enquire" className={buttonClass("light")}>
          Enquire now
        </a>
        <a href="#day-by-day" className={buttonClass("outline-light")}>
          Day by day
        </a>
      </PageHero>

      {/* Facts bar */}
      <section aria-label="Trip facts" className="border-b border-sand-300 bg-sand-100">
        <dl className="container-edit grid grid-cols-2 gap-y-6 py-6 md:grid-cols-4 md:divide-x md:divide-sand-300">
          <Fact label="Duration" value={`${it.durationDays} days · ${it.nights} nights`} />
          <Fact label="Style" value={tierLabel[it.budgetTier]} />
          <Fact label="From" value={<><Price usd={it.priceFromUSD} /> pp</>} />
          <Fact label="Included" value={it.inclusionLine.split(" · ").slice(-1)[0]} />
        </dl>
      </section>

      <JumpNav
        items={[
          { id: "overview", label: "Overview" },
          { id: "day-by-day", label: "Day by day" },
          { id: "included", label: "Included" },
          { id: "rates", label: "Rates" },
          { id: "gallery", label: "Gallery" },
        ]}
        cta="Enquire"
      />

      <div className="container-edit grid gap-14 py-16 md:py-24 lg:grid-cols-[1fr_22rem] lg:gap-20">
        <div className="min-w-0">
          {/* Overview */}
          <section id="overview" aria-labelledby="ov-title">
            <h2 id="ov-title" className="eyebrow text-lagoon-500">Overview</h2>
            <p className="mt-4 font-display text-display-sm leading-snug">{it.summary}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {it.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[0.8125rem]">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-lagoon-500" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <MapPlaceholder stops={it.destinations} />
            </div>
          </section>

          {/* Day by day */}
          <section id="day-by-day" aria-labelledby="dbd-title" className="mt-20">
            <Heading id="dbd-title" size="lg">
              {"Day by *day*"}
            </Heading>
            <ol className="mt-10 space-y-0">
              {it.days.map((d) => {
                const stay = d.stay ? getStay(d.stay) : undefined;
                return (
                  <li key={dayLabel(d)} className="relative grid gap-4 border-l border-sand-300 pb-12 pl-8 last:pb-0 md:grid-cols-[1fr_14rem] md:gap-8">
                    <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-jungle-900" aria-hidden="true" />
                    <div>
                      <p className="eyebrow text-lagoon-500">{dayLabel(d)}</p>
                      <h3 className="mt-2 font-display text-display-sm">{d.title}</h3>
                      <p className="mt-3 leading-relaxed text-ink-soft">{d.body}</p>
                      {d.makeItYours && (
                        <p className="mt-4 rounded-sm bg-sand-100 px-4 py-3 text-sm">
                          <span className="font-medium">Make it yours: </span>
                          {d.makeItYours}
                        </p>
                      )}
                      <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-soft">
                        {stay && (
                          <span>
                            Stay:{" "}
                            <Link href={`/stays/${stay.slug}`} className="text-ink underline underline-offset-4">
                              {stay.name}
                            </Link>
                          </span>
                        )}
                        {d.meals && d.meals.length > 0 && <span>Meals: {d.meals.map((m) => mealNames[m]).join(", ")}</span>}
                      </p>
                    </div>
                    {d.image && (
                      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand-200 md:aspect-square">
                        <Image src={d.image.src} alt={d.image.alt} fill sizes="(min-width: 768px) 14rem, 90vw" className="object-cover" />
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>

          {/* Included */}
          <section id="included" aria-labelledby="inc-title" className="mt-20">
            <Heading id="inc-title" size="lg">
              {"The complete *package*"}
            </Heading>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {(
                [
                  ["Stay", it.included.stay],
                  ["Travel", it.included.travel],
                  ["Experiences", it.included.experiences],
                ] as const
              ).map(([title, items]) => (
                <div key={title}>
                  <h3 className="eyebrow text-ink-soft">{title}</h3>
                  <ul className="mt-3 space-y-2 text-[0.8125rem]">
                    {items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <Icon name="check" size={16} className="mt-1 shrink-0 text-lagoon-500" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-sm border border-dashed border-sand-400 p-6">
              <h3 className="eyebrow text-ink-soft">Not included</h3>
              <ul className="mt-3 grid gap-2 text-[0.8125rem] sm:grid-cols-2">
                {it.excluded.map((i) => (
                  <li key={i} className="flex gap-2">
                    <Icon name="minus" size={16} className="mt-1 shrink-0 text-ink-soft" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Rates */}
          <section id="rates" aria-labelledby="rates-title" className="mt-20">
            <Heading id="rates-title" size="lg">
              {"Rates for *2027*"}
            </Heading>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[30rem] text-left text-[0.8125rem]">
                <caption className="sr-only">Seasonal prices per person, sharing</caption>
                <thead>
                  <tr className="border-b border-jungle-900 text-sm text-ink-soft">
                    <th scope="col" className="py-3 pr-4 font-medium">Season</th>
                    <th scope="col" className="py-3 pr-4 font-medium">Dates</th>
                    <th scope="col" className="py-3 text-right font-medium">Per person</th>
                  </tr>
                </thead>
                <tbody>
                  {it.rates.map((r) => (
                    <tr key={r.label + r.from} className="border-b border-sand-300">
                      <th scope="row" className="py-3 pr-4 font-normal">{r.label}</th>
                      <td className="py-3 pr-4 text-ink-soft">
                        {fmt(r.from)} – {fmt(r.to)}
                      </td>
                      <td className="py-3 text-right font-medium">
                        <Price usd={r.priceUSD} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              Per person, based on two sharing. International flights excluded. Single supplements and peak holiday
              surcharges on request. Prices shown in your chosen currency are indicative; we invoice in USD.
            </p>
          </section>

          {stays.length > 0 && (
            <section aria-labelledby="stays-title" className="mt-20">
              <Heading id="stays-title" size="lg">
                {"Where you'll *stay*"}
              </Heading>
              <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2">
                {stays.map((s) => (
                  <StayCard key={s.slug} s={s} />
                ))}
              </div>
            </section>
          )}

          {/* Gallery */}
          <section id="gallery" aria-labelledby="gal-title" className="mt-20">
            <h2 id="gal-title" className="sr-only">Gallery</h2>
            <Gallery images={[it.heroImage, ...it.gallery]} />
          </section>

          {testimonial && (
            <section aria-label="Guest review" className="mt-20 rounded-sm bg-sand-100 p-8 md:p-12">
              <TestimonialQuote t={testimonial} large />
            </section>
          )}
        </div>

        {/* Sticky pricing sidebar */}
        <aside aria-label="Price and enquiry" className="lg:order-none">
          <div className="space-y-4 lg:sticky lg:top-40">
            <div className="rounded-sm border border-sand-300 bg-sand-50 p-6">
              <p className="text-sm text-ink-soft">From</p>
              <p className="font-display text-display-md">
                <Price usd={it.priceFromUSD} />
              </p>
              <p className="text-sm text-ink-soft">per person, sharing</p>
              <p className="mt-3 border-t border-sand-300 pt-3 text-sm">
                ≈ <Price usd={it.priceFromUSD * 2} /> for two · international flights excluded
              </p>
              <a href="#enquire" className={buttonClass("primary", "mt-5 w-full")}>
                Enquire about this trip
              </a>
              <p className="mt-3 text-center text-xs text-ink-soft">{site.replyPromise}</p>
            </div>
            {specialist && (
              <div className="flex items-center gap-4 rounded-sm border border-sand-300 p-5">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-sand-200">
                  <Image src={specialist.image.src} alt={specialist.image.alt} fill sizes="4rem" className="object-cover" />
                </div>
                <div className="text-sm">
                  <p className="text-ink-soft">Your specialist could be</p>
                  <p className="font-display text-lg">{specialist.name}</p>
                  <p className="text-ink-soft">{specialist.role}</p>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      <section id="enquire" aria-labelledby="enq-title" className="bg-jungle-900 py-20 text-sand-50 md:py-28">
        <div className="container-edit grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Heading id="enq-title" size="xl">
              {"Make this trip *yours*."}
            </Heading>
            <p className="mt-5 max-w-md text-lg text-sand-200">
              Send a few details and your specialist will reply with availability, a tailored version of this route and
              an exact quote.
            </p>
            <p className="mt-6 text-sm text-sand-200">
              Want something completely different?{" "}
              <Link href="/private-travel" className="text-sand-50 underline underline-offset-4">
                Private &amp; bespoke travel
              </Link>
            </p>
          </div>
          <EnquiryForm tripTitle={it.title} tripSlug={it.slug} />
        </div>
      </section>

      <section aria-labelledby="related-title" className="py-20 md:py-28">
        <div className="container-edit">
          <Heading id="related-title" size="lg" className="mb-10">
            {"You might also *like*"}
          </Heading>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((r) => (
              <ItineraryCard key={r.slug} it={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="md:px-6 md:first:pl-0">
      <dt className="eyebrow text-ink-soft">{label}</dt>
      <dd className="mt-1 font-display text-lg">{value}</dd>
    </div>
  );
}
