import Link from "next/link";
import { home } from "@/data/home";
import { site, whatsappHref } from "@/data/site";
import { Heading } from "@/components/ui/Heading";
import { Icon, WhatsAppIcon } from "@/components/ui/Icon";
import { PlanButton } from "@/components/ui/PlanButton";
import { buttonClass } from "@/components/ui/Button";

export function FinalCta({ heading = home.finalCta.heading, text = home.finalCta.text }: { heading?: string; text?: string }) {
  return (
    <section aria-labelledby="final-cta-title" className="bg-jungle-900 py-24 text-sand-50 md:py-32">
      <div className="container-edit text-center">
        <Heading id="final-cta-title" size="xl" className="mx-auto max-w-3xl">
          {heading}
        </Heading>
        <p className="mx-auto mt-5 max-w-xl text-lg text-sand-200">{text}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <PlanButton variant="light" arrow>
            Begin your journey
          </PlanButton>
          {site.whatsapp ? (
            <a
              href={whatsappHref("Hello, I'd like help planning a journey.")}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("outline-light")}
            >
              <WhatsAppIcon size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          ) : (
            <a href={site.phoneHref} className={buttonClass("outline-light")}>
              <Icon name="phone" size={18} />
              <span>Call {site.phone}</span>
            </a>
          )}
        </div>
        <p className="mt-8 text-sm text-sand-200">
          Planning something exceptional?{" "}
          <Link href="/private-travel" className="text-sand-50 underline underline-offset-4">
            Explore private &amp; bespoke travel
          </Link>
        </p>
      </div>
    </section>
  );
}
