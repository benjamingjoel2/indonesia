import { home } from "@/data/home";
import { ArrowLink } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { t, tx } from "@/lib/i18n/server";

export function WhyUs() {
  const why = tx(home.why);
  return (
    <section aria-labelledby="why-title" className="bg-sand-100 py-20 md:py-28">
      <div className="container-edit grid gap-14 max-w-3xl">
        <div>
          <Heading id="why-title" size="xl">
            {why.heading}
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
            {why.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <ArrowLink href="/why-travel-with-us" className="mt-8">
            {t("Why travel with us")}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
