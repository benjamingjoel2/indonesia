import Image from "next/image";
import Link from "@/components/i18n/Link";
import { home } from "@/data/home";
import { Heading } from "@/components/ui/Heading";
import { PlanButton } from "@/components/ui/PlanButton";
import { buttonClass } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { t } from "@/lib/i18n/server";

/** Deep-green closing band: copy and buttons on the left, a torn-edge photo on the right. */
export function FinalCta({ heading = t(home.finalCta.heading), text = t(home.finalCta.text) }: { heading?: string; text?: string }) {
  const img = home.brochure.cover;
  return (
    <section aria-labelledby="final-cta-title" className="relative isolate overflow-hidden bg-jungle-900 text-paper">
      <div className="container-edit grid items-center gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:gap-16 md:py-28">
        <div>
          <p className="eyebrow text-sand-300">{t("Plan your trip")}</p>
          <Heading id="final-cta-title" size="xl" className="mt-4 max-w-xl">
            {heading}
          </Heading>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-sand-200">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PlanButton arrow>{t("Plan your trip")}</PlanButton>
            <Link href="/contact" className={buttonClass("outline-light")}>
              <Icon name="mail" size={16} /> {t("Contact us")}
            </Link>
          </div>
          <p className="mt-8 text-sm text-sand-200">
            {t("Travelling privately or celebrating something big?")}{" "}
            <Link href="/private-travel" className="font-semibold text-paper underline underline-offset-4">
              {t("Explore private & bespoke travel")}
            </Link>
          </p>
        </div>
        <div className="edge-torn relative aspect-[4/3] bg-jungle-800 md:aspect-[5/4]">
          <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
