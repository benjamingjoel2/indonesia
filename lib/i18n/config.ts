// Locale settings shared by server and client code. English is the default and lives at the
// root URLs; French, German and Spanish live under /fr, /de and /es (pre-rendered copies).

export const locales = ["en", "fr", "de", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const otherLocales = ["fr", "de", "es"] as const;

export const intlLocale: Record<Locale, string> = { en: "en-US", fr: "fr-FR", de: "de-DE", es: "es-ES" };
export const ogLocale: Record<Locale, string> = { en: "en_US", fr: "fr_FR", de: "de_DE", es: "es_ES" };
export const localeNames: Record<Locale, string> = { en: "English", fr: "Français", de: "Deutsch", es: "Español" };

export type Messages = Record<string, string>;

export function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && (locales as readonly string[]).includes(v);
}

/** Locale of a pathname: the first segment when it is fr/de/es, otherwise English. */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  return isLocale(seg) && seg !== "en" ? seg : "en";
}

/** Pathname without its locale prefix ("/fr/trips" -> "/trips", "/fr" -> "/"). */
export function stripLocale(pathname: string) {
  const l = localeFromPath(pathname);
  if (l === "en") return pathname || "/";
  return pathname.slice(l.length + 1) || "/";
}

/** Points an internal href at the same page in `locale`. External links, anchors, API and asset paths are untouched. */
export function localizeHref(href: string, locale: Locale) {
  if (locale === "en" || !href.startsWith("/") || href.startsWith("//")) return href;
  if (/^\/(api|_next|icon|opengraph-image|sitemap|robots)(\/|$|\.)/.test(href)) return href;
  if (localeFromPath(href) !== "en") return href;
  const m = href.match(/^([^?#]*)(.*)$/)!;
  const path = m[1] === "/" ? "" : m[1];
  return `/${locale}${path}${m[2]}`;
}

/** Translate one string. Unknown strings fall back to English. `{name}` placeholders are filled from `vars`. */
export function makeT(messages?: Messages, onMissing?: (s: string) => void) {
  return function t(s: string, vars?: Record<string, string | number>) {
    let r = s;
    if (messages && s) {
      const hit = messages[s];
      if (hit) r = hit;
      else if (onMissing && /\p{L}{2}/u.test(s)) onMissing(s);
    }
    if (vars) r = r.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
    return r;
  };
}

// Object keys whose string values are identifiers, URLs or lookups, never visible copy.
// (Objects under these keys are still walked, e.g. home.destinations.heading.)
export const SKIP_KEYS = new Set([
  "slug", "src", "href", "id", "type", "tier", "destination", "destinations", "kind", "icon", "group", "rating",
  "badge", "budgetTier", "stay", "meals", "from", "to",
  "videoSrc", "poster", "trip", "trips", "stays", "experiences", "slugs", "itineraries", "code", "symbol",
  "date", "updated", "url", "email", "countryCode", "postalCode", "months", "bestMonths", "key", "value",
  "heroImageSrc", "coords", "lat", "lng", "currency",
]);

/** Deep-translate a data structure: every string value outside SKIP_KEYS is looked up. */
export function makeTx(t: (s: string) => string, enabled: boolean) {
  // `skip` is false inside `included` (itinerary inclusions: stay, travel, experiences are text there).
  const walk = (v: unknown, key?: string, skip = true): unknown => {
    if (!enabled) return v;
    if (typeof v === "string") return skip && key && SKIP_KEYS.has(key) ? v : t(v);
    if (Array.isArray(v)) return v.map((x) => walk(x, key, skip));
    if (v && typeof v === "object" && Object.getPrototypeOf(v) === Object.prototype) {
      const inner = key !== "included";
      return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x, k, inner)]));
    }
    return v;
  };
  return <T,>(v: T): T => walk(v) as T;
}

/** Marks an English string for translation where it is defined (it is translated where it is shown). */
export const msg = (s: string) => s;
