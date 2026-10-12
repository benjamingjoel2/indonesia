import Link from "next/link";
import { footerColumns, legalLinks, site, whatsappHref } from "@/data/site";
import { Icon, WhatsAppIcon } from "@/components/ui/Icon";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-jungle-900 text-sand-100">
      <div className="container-edit py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.8fr]">
          {/* Brand block */}
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-sand-200">{site.blurb}</p>
            <ul className="mt-6 space-y-2 text-[0.9375rem]">
              <li>
                <a href={site.phoneHref} className="inline-flex items-center gap-2.5 hover:text-white">
                  <Icon name="phone" size={16} /> {site.phone}
                </a>
              </li>
              {site.whatsapp && (
                <li>
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 hover:text-white"
                  >
                    <WhatsAppIcon size={16} /> WhatsApp us
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 hover:text-white">
                  <Icon name="mail" size={16} /> {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-2 text-sand-200">
                <Icon name="pin" size={16} className="mt-0.5 shrink-0" />
                <span>
                  {site.address.join(", ")}
                  <span className="block text-sm">{site.hours}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-5">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="eyebrow mb-4 text-sand-400">{col.title}</h2>
                <ul className="space-y-2.5 text-[0.9375rem]">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sand-100 hover:text-white hover:underline hover:underline-offset-4">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <nav aria-label="Connect">
              <h2 className="eyebrow mb-4 text-sand-400">Connect</h2>
              <ul className="space-y-2.5 text-[0.9375rem]">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sand-100 hover:text-white hover:underline hover:underline-offset-4"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-jungle-700 pt-10">
          <div className="flex items-center gap-3 rounded-sm border border-jungle-600 px-4 py-3">
            <span className="flex text-sand-300" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" size={16} />
              ))}
            </span>
            <span className="text-sm">
              <strong className="font-semibold">{site.rating.score.toFixed(1)}</strong> / 5 on {site.rating.source}
            </span>
          </div>
          {site.memberships.map((m) => (
            <div
              key={m}
              className="rounded-sm border border-dashed border-jungle-600 px-4 py-3 text-xs uppercase tracking-[0.14em] text-sand-300"
            >
              {m}
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="mt-10 flex flex-col gap-4 text-sm text-sand-300 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved. [ABN placeholder]
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white hover:underline hover:underline-offset-4">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
