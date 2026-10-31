import Link from "@/components/i18n/Link";
import { site } from "@/data/site";
import { lhref, t } from "@/lib/i18n/server";

export interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: t("Home"), href: "/" }, ...items].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.url}${lhref(c.href)}`,
    })),
  };
  return (
    <nav aria-label={t("Breadcrumb")} className={`text-sm ${tone === "light" ? "text-sand-200" : "text-ink-soft"}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link href="/" className="hover:underline hover:underline-offset-4">
            {t("Home")}
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {i === items.length - 1 ? (
              <span aria-current="page">{c.label}</span>
            ) : (
              <Link href={c.href} className="hover:underline hover:underline-offset-4">
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
