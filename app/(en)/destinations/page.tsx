import { getDestinations } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { Heading } from "@/components/ui/Heading";
import { t } from "@/lib/i18n/server";

export const generateMetadata = () => buildMetadata({
  title: "Indonesia destinations",
  description:
    "From Bali and Komodo to Raja Ampat, Sumatra and Papua: explore the Indonesian islands we know best, with seasons, highlights and where to stay.",
  path: "/destinations",
});

export default function DestinationsPage() {
  const all = getDestinations();
  const groups = [
    { title: t("Top *destinations*"), items: all.filter((d) => d.topDestination) },
    { title: t("Western *Indonesia*"), items: all.filter((d) => !d.topDestination && d.group === "western") },
    { title: t("Eastern *Indonesia*"), items: all.filter((d) => !d.topDestination && d.group === "eastern") },
  ];
  return (
    <>
      <TextHero
        eyebrow={t("Destinations")}
        title={t("Where to *go*.")}
        intro={t("Seventeen thousand islands is a lot of choice. These are the places we know intimately, from the busy and beautiful to the barely visited.")}
        crumbs={[{ label: t("Destinations"), href: "/destinations" }]}
      />
      {groups.map((g) => (
        <section key={g.title} className="container-edit border-b border-sand-300 py-16 last:border-0 md:py-20">
          <Heading size="lg" className="mb-10">
            {g.title}
          </Heading>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {g.items.map((d) => (
              <DestinationCard key={d.slug} d={d} />
            ))}
          </div>
        </section>
      ))}
      <FinalCta />
    </>
  );
}
