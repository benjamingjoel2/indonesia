import Link from "@/components/i18n/Link";
import { home } from "@/data/home";
import { Heading } from "@/components/ui/Heading";
import { PlanButton } from "@/components/ui/PlanButton";
import { buttonClass } from "@/components/ui/Button";
import { t } from "@/lib/i18n/server";

/** `heading` and `text` are already translated when passed in. */
export function FinalCta({ heading = t(home.finalCta.heading), text = t(home.finalCta.text) }: { heading?: string; text?: string }) {
  return (
    <section aria-labelledby="final-cta-title" className="bg-jungle-900 py-24 text-sand-50 md:py-32">
      <div className="container-edit text-center">
        <Heading id="final-cta-title" size="xl" className="mx-auto max-w-3xl">
          {heading}
        </Heading>
        <p className="mx-auto mt-5 max-w-xl text-lg text-sand-200">{text}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <PlanButton variant="light" arrow>
            {t("Plan your trip")}
          </PlanButton>
          <Link href="/contact" className={buttonClass("outline-light")}>
            {t("Contact us")}
          </Link>
        </div>
        <p className="mt-8 text-sm text-sand-200">
          {t("Travelling privately or celebrating something big?")}{" "}
          <Link href="/private-travel" className="text-sand-50 underline underline-offset-4">
            {t("Explore private & bespoke travel")}
          </Link>
        </p>
      </div>
    </section>
  );
}
