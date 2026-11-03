import Image from "next/image";
import { home as homeEn } from "@/data/home";
import { site } from "@/data/site";
import { Heading } from "@/components/ui/Heading";
import { LinkButton } from "@/components/ui/Button";
import { PlanButton } from "@/components/ui/PlanButton";
import { Icon } from "@/components/ui/Icon";
import { t, tx } from "@/lib/i18n/server";

/** A photo-led welcome that puts the trip promise directly on the destination. */
export function Hero() {
  const { hero } = tx(homeEn);
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-jungle-950 text-paper"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {hero.videoSrc ? (
          <video
            className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            poster={hero.image.src}
          >
            <source src={hero.videoSrc} type="video/mp4" />
          </video>
        ) : null}
        <div className={`absolute inset-0 ${hero.videoSrc ? "motion-safe:hidden" : ""}`}>
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            quality={65}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-jungle-950/90 via-jungle-950/65 to-jungle-950/10 md:via-jungle-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-jungle-950/45 via-transparent to-jungle-950/15" />
      </div>

      <div className="container-edit relative z-10 flex min-h-[40rem] items-center py-20 md:min-h-[min(48rem,calc(100svh-7rem))] md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-sand-200">{hero.eyebrow}</p>
          <Heading as="h1" id="hero-title" size="2xl" className="mt-5 max-w-3xl text-paper drop-shadow-sm">
            {hero.heading}
          </Heading>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85 md:text-xl">
            {hero.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PlanButton variant="light" arrow>{t("Start planning")}</PlanButton>
            <LinkButton href="/why-travel-with-us" variant="outline-light" arrow>
              {t("How we work")}
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="container-edit relative z-10 pb-4 md:pb-6">
        <div className="-mb-8 flex items-start gap-3 rounded-sm border border-sand-300/70 bg-paper px-5 py-4 text-sm text-ink shadow-[0_10px_30px_-20px_rgba(28,28,25,0.35)] md:items-center">
          <span className="pill shrink-0 border-lagoon-500 text-lagoon-500">
            {t("Included")}
          </span>
          <p className="max-w-3xl leading-relaxed">{t(site.promo)}</p>
        </div>
      </div>
    </section>
  );
}
