import Image from "next/image";
import { home as homeEn } from "@/data/home";
import { site } from "@/data/site";
import { Heading } from "@/components/ui/Heading";
import { LinkButton } from "@/components/ui/Button";
import { PlanButton } from "@/components/ui/PlanButton";
import { Icon } from "@/components/ui/Icon";
import { t, tx } from "@/lib/i18n/server";

/**
 * Cream hero: the headline sits on a paper panel with a torn right/bottom edge,
 * and the photo rises up behind it with a torn top edge.
 */
export function Hero() {
  const { hero } = tx(homeEn);
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-paper">
      <div className="container-edit pt-6 md:pt-10">
        <div className="edge-torn-br relative z-10 inline-block max-w-3xl bg-paper pb-10 pr-8 md:pb-14 md:pr-16">
          <p className="eyebrow text-clay-500">{hero.eyebrow}</p>
          <Heading as="h1" id="hero-title" size="2xl" className="mt-4 text-ink">
            {hero.heading}
          </Heading>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{hero.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PlanButton arrow>{t("Start planning")}</PlanButton>
            <LinkButton href="/why-travel-with-us" variant="secondary" arrow>
              {t("How we work")}
            </LinkButton>
          </div>
        </div>
      </div>

      <div className="relative -z-10 -mt-20 h-[26rem] w-full md:-mt-36 md:h-[40rem] lg:h-[44rem]">
        {hero.videoSrc ? (
          <video
            className="edge-torn-y absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            poster={hero.image.src}
            aria-hidden="true"
          >
            <source src={hero.videoSrc} type="video/mp4" />
          </video>
        ) : null}
        <div className={`edge-torn-y absolute inset-0 ${hero.videoSrc ? "motion-safe:hidden" : ""}`}>
          <Image src={hero.image.src} alt={hero.image.alt} fill priority quality={55} sizes="100vw" className="object-cover" />
        </div>
      </div>

      <div className="container-edit">
        <div className="mt-8 flex items-start gap-3 rounded-sm bg-sand-100 px-5 py-4 text-sm text-ink md:items-center">
          <span className="pill shrink-0 border-lagoon-500 text-lagoon-500">
            <Icon name="check" size={13} strokeWidth={2.2} /> {t("Included")}
          </span>
          <p className="max-w-3xl leading-relaxed">{t(site.promo)}</p>
        </div>
      </div>
    </section>
  );
}
