import { faqGroups as faqGroupsEn } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { FaqList } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { t, tx } from "@/lib/i18n/server";

export const generateMetadata = () => buildMetadata({
  title: "Frequently asked questions",
  description: "Visas, seasons, payments, insurance, getting around and staying safe: answers to common questions about travelling in Indonesia with The Island Edit.",
  path: "/faq",
});

export default function FaqPage() {
  const faqGroups = tx(faqGroupsEn);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqGroups.flatMap((g) =>
            g.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          ),
        }}
      />
      <TextHero
        eyebrow={t("FAQ")}
        title={t("Questions, *answered*.")}
        intro={t("The things travellers most often ask us. Anything else, your specialist is a message away.")}
        crumbs={[{ label: t("FAQ"), href: "/faq" }]}
      />
      <div className="container-edit py-16 md:py-24">
        {faqGroups.map((g) => (
          <section key={g.title} aria-label={g.title} className="grid gap-6 border-b border-sand-300 py-12 first:pt-0 last:border-0 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <h2 className="font-display text-display-md">{g.title}</h2>
            <FaqList items={g.items} />
          </section>
        ))}
      </div>
      <FinalCta />
    </>
  );
}
