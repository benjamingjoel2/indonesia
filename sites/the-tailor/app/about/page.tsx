import Image from "next/image";
import { story } from "@/data/pages";
import { site } from "@/data/site";
import { team } from "@/data/team";
import { buildMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { ArrowLink } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";

export const metadata = buildMetadata({
  title: "Our story & team",
  description: "The Tailor is an Adelaide-based team of Travel Designers who plan private, tailor-made luxury journeys across Australia, New Zealand and Fiji.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <TextHero
        eyebrow="About us"
        title="Fewer places, better *chosen*."
        intro={site.blurb}
        crumbs={[{ label: "About", href: "/about" }]}
      />
      <section id="story" className="container-edit grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Heading size="xl">{story.heading}</Heading>
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          {story.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <ArrowLink href="/why-travel-with-us" className="text-ink">
            Why travel with us
          </ArrowLink>
        </div>
      </section>
      <section id="team" aria-labelledby="team-title" className="bg-sand-100 py-20 md:py-28">
        <div className="container-edit">
          <Heading id="team-title" size="xl" className="mb-12">
            {"Meet the *team*"}
          </Heading>
          <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <li key={m.name}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sand-200">
                  <Image src={m.image.src} alt={m.image.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <h3 className="mt-5 font-display text-display-sm">{m.name}</h3>
                <p className="eyebrow mt-1 text-lagoon-500">{m.role}</p>
                <p className="mt-3 text-[0.8125rem] leading-relaxed text-ink-soft">{m.bio}</p>
                <p className="mt-2 text-sm text-ink-soft">Speaks {m.languages.join(", ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
