import { story } from "@/data/pages";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { ArrowLink } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { t } from "@/lib/i18n/server";

export const generateMetadata = () => buildMetadata({
  title: "Our story",
  description: "Founded in Bali in 2011, The Island Edit is a team of Indonesia specialists in Bali and Jakarta who plan private, tailor-made trips across the archipelago.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <TextHero
        eyebrow={t("About us")}
        title={t("Fewer places, better *chosen*.")}
        intro={t(site.blurb)}
        crumbs={[{ label: t("About"), href: "/about" }]}
      />
      <section id="story" className="container-edit grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Heading size="xl">{t(story.heading)}</Heading>
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          {story.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{t(p)}</p>
          ))}
          <ArrowLink href="/why-travel-with-us" className="text-ink">
            {t("Why travel with us")}
          </ArrowLink>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
