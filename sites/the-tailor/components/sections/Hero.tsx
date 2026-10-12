import Image from "next/image";
import { home } from "@/data/home";
import { site } from "@/data/site";
import { Heading } from "@/components/ui/Heading";
import { LinkButton } from "@/components/ui/Button";
import { PlanButton } from "@/components/ui/PlanButton";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  const { hero } = home;
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-jungle-950 text-sand-50">
      {hero.videoSrc ? (
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70 motion-reduce:hidden"
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
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className={`-z-20 object-cover ${hero.videoSrc ? "motion-safe:hidden" : ""}`}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-jungle-950/85 via-jungle-950/55 to-jungle-950/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-jungle-950/70 to-transparent" />

      <div className="container-edit flex min-h-[calc(100svh-6.75rem)] flex-col justify-end pb-10 pt-24 md:min-h-[44rem] md:pb-14">
        <div className="max-w-3xl">
          <p className="eyebrow text-sand-300">{hero.eyebrow}</p>
          <Heading as="h1" id="hero-title" size="2xl" className="mt-5">
            {hero.heading}
          </Heading>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-100 md:text-xl">{hero.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <PlanButton variant="light" arrow>
              Enquire
            </PlanButton>
            <LinkButton href="/why-travel-with-us" variant="outline-light" arrow>
              How we work
            </LinkButton>
          </div>
        </div>

        <div className="mt-14 flex items-start gap-3 border-t border-sand-50/25 pt-5 text-sm text-sand-100 md:mt-20">
          <span className="eyebrow mt-0.5 shrink-0 rounded-sm bg-sand-50/15 px-2 py-1 text-[0.6875rem] text-sand-50">
            Included
          </span>
          <p className="max-w-3xl">{site.promo}</p>
          <Icon name="check" size={18} className="ml-auto hidden shrink-0 md:block" />
        </div>
      </div>
    </section>
  );
}
