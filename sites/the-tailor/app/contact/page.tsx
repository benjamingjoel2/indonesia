import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { TextHero } from "@/components/sections/PageHero";
import { Icon } from "@/components/ui/Icon";

export const metadata = buildMetadata({
  title: "Contact us",
  description: "Talk to a Travel Designer at The Tailor by phone or email. Based in Adelaide, South Australia, planning private journeys across Australia.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <TextHero
        eyebrow="Contact"
        title="Talk to a Travel *Designer*."
        intro={`${site.replyPromise}. Office hours: ${site.hours}. Travelling guests are supported throughout their journey.`}
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <section className="container-edit grid gap-14 py-16 md:py-24 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div className="space-y-8">
          <ul className="space-y-4 text-lg">
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-3 hover:underline hover:underline-offset-4">
                <Icon name="phone" size={22} /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 hover:underline hover:underline-offset-4">
                <Icon name="mail" size={22} /> {site.email}
              </a>
            </li>
          </ul>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { city: "Adelaide office", lines: [...site.address] },
            ].map((o) => (
              <address key={o.city} className="not-italic">
                <p className="eyebrow text-lagoon-500">{o.city}</p>
                <p className="mt-2 flex gap-2 leading-relaxed text-ink-soft">
                  <Icon name="pin" size={18} className="mt-1 shrink-0" />
                  <span>
                    {o.lines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </span>
                </p>
              </address>
            ))}
          </div>
        </div>
        <div className="rounded-sm border border-sand-300 bg-sand-50 p-6 md:p-10">
          <h2 className="mb-6 font-display text-display-sm">Send us a message</h2>
          <EnquiryForm tone="light" />
        </div>
      </section>
    </>
  );
}
