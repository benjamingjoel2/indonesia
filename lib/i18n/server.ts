import { cache } from "react";
import { appendFileSync } from "node:fs";
import { intlLocale, localizeHref, makeT, makeTx, type Locale, type Messages } from "./config";
import fr from "@/i18n/fr.json";
import de from "@/i18n/de.json";
import es from "@/i18n/es.json";
import clientKeys from "@/i18n/client-keys.json";

// Server-side translation. The locale of the page being rendered is kept in a per-request
// store: each locale's root layout, page wrapper and generateMetadata call setLocale().
const dicts: Record<Locale, Messages | undefined> = { en: undefined, fr, de, es };

const store = cache(() => ({ locale: "en" as Locale }));

export function setLocale(l: Locale) {
  store().locale = l;
  return l;
}

export function getLocale(): Locale {
  return store().locale;
}

// I18N_COLLECT=1 next build: write every untranslated string to i18n/missing.txt.
// Strings that are already translations (data passed through tx() and then t()) are skipped.
const translated = new Set([fr, de, es].flatMap((d) => Object.values(d as Messages)));
const onMissing = process.env.I18N_COLLECT
  ? (s: string) => {
      if (!translated.has(s)) appendFileSync("i18n/missing.txt", JSON.stringify(s) + "\n");
    }
  : undefined;

export function t(s: string, vars?: Record<string, string | number>) {
  return makeT(dicts[getLocale()], onMissing)(s, vars);
}

export function tx<T>(v: T): T {
  const l = getLocale();
  return makeTx((s) => makeT(dicts[l], onMissing)(s), l !== "en")(v);
}

/** Internal href in the current locale. */
export function lhref(href: string) {
  return localizeHref(href, getLocale());
}

/** The subset of translations client components need. */
export function clientMessages(locale: Locale): Messages | undefined {
  const d = dicts[locale];
  if (!d) return undefined;
  const out: Messages = {};
  for (const k of clientKeys as string[]) if (d[k]) out[k] = d[k];
  return out;
}

/** Month name in the current locale (1 = January). */
export function monthName(m: number, width: "short" | "long" = "long") {
  return new Intl.DateTimeFormat(intlLocale[getLocale()], { month: width, timeZone: "UTC" }).format(Date.UTC(2026, m - 1, 15));
}

/** A date (ISO yyyy-mm-dd) in the current locale. */
export function formatDate(iso: string, opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }) {
  return new Intl.DateTimeFormat(intlLocale[getLocale()], { timeZone: "UTC", ...opts }).format(new Date(`${iso.slice(0, 10)}T12:00:00Z`));
}
