import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/data/site";
import { CurrencyProvider } from "@/lib/currency";
import { buildSearchIndex } from "@/lib/search-index";
import { UiProvider } from "@/lib/ui-state";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { PlannerIntro } from "@/components/planner/PlannerIntro";
import { PlannerModal } from "@/components/planner/PlannerModal";
import { getRegionImages } from "@/lib/planner-images";
import { SearchOverlay } from "@/components/search/SearchOverlay";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
  // Not preloaded: the display face is large and would compete with the hero image.
  // Size-adjusted fallback metrics keep the swap free of layout shift.
  preload: false,
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

/** Search engines are kept out until launch: set NEXT_PUBLIC_ALLOW_INDEXING=1 on the live site. */
const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "1";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  robots: allowIndexing ? undefined : { index: false, follow: false },
  title: {
    default: `${site.name} — Luxury tailor-made Australia journeys`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: { siteName: site.name, locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#1d2326",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const searchIndex = buildSearchIndex();
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-dvh">
        <CurrencyProvider>
          <UiProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-jungle-900 focus:px-4 focus:py-3 focus:text-sand-50"
            >
              Skip to content
            </a>
            <AnnouncementBar />
            <Header />
            <main id="main" tabIndex={-1} className="outline-none">
              {children}
            </main>
            <Footer />
            <FloatingContact />
            <SearchOverlay index={searchIndex} />
            <PlannerModal regionImages={getRegionImages()} intro={<PlannerIntro />} />
          </UiProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
