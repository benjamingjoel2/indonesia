import { getDestinations } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { Heading } from "@/components/ui/Heading";

export const metadata = buildMetadata({
  title: "Australia, New Zealand & Fiji destinations",
  description:
    "From the Great Barrier Reef and Uluru to Kangaroo Island, the Kimberley and Tasmania: the places we know best, with seasons, highlights and where to stay.",
  path: "/destinations",
});

export default function DestinationsPage() {
  const all = getDestinations();
  const groups = [
    { title: "Iconic *Australia*", items: all.filter((d) => d.group === "iconic") },
    { title: "States & *territories*", items: all.filter((d) => d.group === "states") },
    { title: "Beyond *Australia*", items: all.filter((d) => d.group === "beyond") },
  ];
  return (
    <>
      <TextHero
        eyebrow="Destinations"
        title="Where to *go*."
        intro="A continent of red desert, reef and wild coast, plus New Zealand and Fiji. These are the places we know personally, and when each is at its best."
        crumbs={[{ label: "Destinations", href: "/destinations" }]}
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
