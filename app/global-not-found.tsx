import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

// Shown for URLs that match no route at all (each locale also has its own not-found page).
export const metadata: Metadata = { title: "Page not found · The Island Edit", robots: { index: false } };

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="min-h-dvh">
        <main className="container-edit py-32">
          <p className="eyebrow text-lagoon-500">404</p>
          <h1 className="mt-4 font-display text-display-xl">This island isn&apos;t on our map.</h1>
          <p className="mt-5 max-w-md text-lg text-ink-soft">The page you were looking for has moved or never existed.</p>
          <p className="mt-8 flex gap-6 text-sm">
            <Link href="/" className="underline underline-offset-4">The Island Edit</Link>
            <Link href="/fr" className="underline underline-offset-4" hrefLang="fr">Français</Link>
            <Link href="/de" className="underline underline-offset-4" hrefLang="de">Deutsch</Link>
            <Link href="/es" className="underline underline-offset-4" hrefLang="es">Español</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
