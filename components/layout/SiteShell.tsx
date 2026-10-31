import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/data/site";
import { ogLocale } from "@/lib/i18n/config";
import { CurrencyProvider } from "@/lib/currency";
import { buildSearchIndex } from "@/lib/search-index";
import { UiProvider } from "@/lib/ui-state";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PlannerIntro } from "@/components/planner/PlannerIntro";
import { PlannerModal } from "@/components/planner/PlannerModal";
import { getRegionImages } from "@/lib/planner-images";
import { SearchOverlay } from "@/components/search/SearchOverlay";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import type { Locale } from "@/lib/i18n/config";
import { clientMessages, setLocale, t } from "@/lib/i18n/server";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
  // Preloaded: the hero heading is set in it, and a late swap reflowed the hero
  // copy (CLS 0.12 on mobile). Size-adjusted fallback metrics cover the rest.
  preload: true,
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

/** Site-wide metadata defaults for one locale's root layout. */
export function shellMetadata(locale: Locale): Metadata {
  setLocale(locale);
  return {
    metadataBase: new URL(site.url),
    title: {
      default: t(`${site.name} — Tailor-made Indonesia journeys`),
      template: `%s · ${site.name}`,
    },
    description: t(site.description),
    applicationName: site.name,
    openGraph: { siteName: site.name, locale: ogLocale[locale], type: "website" },
    twitter: { card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: "#0f2e2a",
};

/** The page shell (html, header, footer, overlays) shared by every locale's root layout. */
export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  setLocale(locale);
  const searchIndex = buildSearchIndex();
  return (
    <html lang={locale} className={`${fraunces.variable} ${inter.variable}`}>
      {/* eslint-disable-next-line @next/next/no-head-element -- root layout shell */}
      <head>
        {/* Open the connection to the photo CDN early, before the first image is requested. */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-dvh">
        <I18nProvider locale={locale} messages={clientMessages(locale)}>
        <CurrencyProvider>
          <UiProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-jungle-900 focus:px-4 focus:py-3 focus:text-sand-50"
            >
              {t("Skip to content")}
            </a>
            <AnnouncementBar />
            <Header />
            <main id="main" tabIndex={-1} className="outline-none">
              {children}
            </main>
            <Footer />
            <SearchOverlay index={searchIndex} />
            <PlannerModal regionImages={getRegionImages()} intro={<PlannerIntro />} />
          </UiProvider>
        </CurrencyProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
