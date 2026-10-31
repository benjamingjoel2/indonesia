import { home } from "@/data/home";
import { howWeWork, whyReasons } from "@/data/pages";
import { buildMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";
import { ValueProps } from "@/components/sections/ValueProps";
import { Heading } from "@/components/ui/Heading";
import { t, tx } from "@/lib/i18n/server";

export const generateMetadata = () => buildMetadata({
  title: "Why travel with us",
  description: "One dedicated specialist, first-hand knowledge of every stay, rates that match booking direct and 24/7 support across Indonesia.",
  path: "/why-travel-with-us",
});

export default function WhyPage() {
  return (
    <>
      <TextHero
        eyebrow={t("Why travel with us")}
        title={t("How we *work*.")}
        intro={t(home.hero.intro)}
        crumbs={[{ label: t("Why travel with us"), href: "/why-travel-with-us" }]}
      />
      <ValueProps />
      <section aria-labelledby="how-title" className="container-edit py-20 md:py-28">
        <Heading id="how-title" size="xl" className="mb-12">
          {t("Four steps, one *conversation*")}
        </Heading>
        <ol className="grid gap-8 md:grid-cols-4">
          {tx(howWeWork).map((s, i) => (
            <li key={s.title} className="border-t border-jungle-900 pt-5">
              <span className="font-display text-4xl italic font-light text-lagoon-500">{i + 1}</span>
              <h3 className="mt-3 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section aria-labelledby="reasons-title" className="bg-sand-100 py-20 md:py-28">
        <div className="container-edit">
          <Heading id="reasons-title" size="xl" className="mb-12">
            {t("Six reasons guests *return*")}
          </Heading>
          <ul className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {tx(whyReasons).map((r) => (
              <li key={r.title}>
                <h3 className="font-display text-display-sm">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
