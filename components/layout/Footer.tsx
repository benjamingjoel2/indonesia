import Link from "@/components/i18n/Link";
import { addressLines, footerColumns, legalLinks, site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";
import { t, tx } from "@/lib/i18n/server";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-paper text-ink">
      <div className="container-edit py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2.7fr]">
          {/* Brand block */}
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-soft">{t(site.blurb)}</p>
            <ul className="mt-6 space-y-2 text-[0.9375rem]">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 font-semibold hover:text-lagoon-500">
                  <Icon name="mail" size={16} /> {site.email}
                </a>
              </li>
              <li>
                <address className="inline-flex gap-2.5 not-italic text-ink-soft">
                  <Icon name="pin" size={16} className="mt-0.5 shrink-0" />
                  <span>{addressLines.join(", ")}</span>
                </address>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {tx(footerColumns).map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="eyebrow mb-4 text-sand-400">{col.title}</h2>
                <ul className="space-y-2.5 text-[0.9375rem] font-semibold">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="hover:text-lagoon-500">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="mt-14 flex flex-col gap-4 border-t border-sand-300 pt-8 text-sm text-ink-soft md:flex-row md:items-center md:justify-between">
          <p className="font-semibold">
            © {year} {site.name}. {t("All rights reserved.")}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-semibold">
            {tx(legalLinks).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-lagoon-500">
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
