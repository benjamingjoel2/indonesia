import Image from "next/image";
import { home } from "@/data/home";
import { getDestinationsBySlugs } from "@/lib/data";
import { ArrowLink } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { t, tx } from "@/lib/i18n/server";

/** Editorial "about" block: big serif statement, a leaning photo collage, and the story. */
export function WhyUs() {
  const why = tx(home.why);
  const [lead, ...rest] = why.paragraphs;
  const photos = getDestinationsBySlugs(["raja-ampat", "bali", "komodo"]).map((d) => d.heroImage);
  const tilt = ["md:-rotate-3 md:translate-y-10", "md:rotate-2", "md:-rotate-2 md:-translate-y-6"];
  return (
    <section aria-labelledby="why-title" className="bg-paper py-20 md:py-28">
      <div className="container-edit">
        <Eyebrow className="mb-4">{t("About The Island Edit")}</Eyebrow>
        <Heading id="why-title" size="md" className="max-w-5xl text-ink">
          {lead}
        </Heading>

        <div className="mt-14 grid gap-5 md:grid-cols-[0.8fr_1.1fr_1.2fr] md:gap-6">
          {photos.map((img, i) => (
            <div key={img.src} className={`edge-soft relative aspect-[4/5] overflow-hidden bg-sand-200 md:aspect-auto md:h-72 ${tilt[i]}`}>
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
          <div className="space-y-5 font-display text-display-sm text-ink-soft md:text-right">
            {rest.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <div className="rounded-sm bg-sand-100 p-7 md:p-9">
            <Icon name="quote" size={28} className="text-lagoon-500" />
            <p className="mt-4 text-lg font-semibold leading-relaxed text-lagoon-500">
              {t("We want every guest to feel looked after from the first message to the last transfer, and to come home knowing the islands a little better than they expected.")}
            </p>
            <p className="eyebrow mt-5 text-lagoon-500">{t("The Island Edit team")}</p>
            <ArrowLink href="/why-travel-with-us" className="mt-6 text-[0.9375rem] text-ink">
              {t("Why travel with us")}
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
