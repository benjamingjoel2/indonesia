import Link from "@/components/i18n/Link";
import { addressLines, footerColumns, legalLinks, site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";
import { t, tx } from "@/lib/i18n/server";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-jungle-900 text-sand-100">
      <div className="container-edit py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.8fr]">
          {/* Brand block */}
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-[0.8125rem] leading-relaxed text-sand-200">{t(site.blurb)}</p>
            <ul className="mt-6 space-y-2 text-[0.8125rem]">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 hover:text-white">
                  <Icon name="mail" size={16} /> {site.email}
                </a>
              </li>
              <li>
                <address className="inline-flex gap-2.5 not-italic text-sand-200">
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
                <ul className="space-y-2.5 text-[0.8125rem]">
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
          </div>
        </div>

        {/* Legal */}
        <div className="mt-14 border-t border-jungle-700 pt-10 flex flex-col gap-4 text-sm text-sand-300 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. {t("All rights reserved.")}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {tx(legalLinks).map((l) => (
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
