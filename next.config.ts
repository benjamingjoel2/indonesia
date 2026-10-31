import type { NextConfig } from "next";

// Static preview export (see scripts/build-preview.mjs): no server, no image optimizer.
const staticPreview = process.env.NEXT_PUBLIC_STATIC_PREVIEW === "1";

const nextConfig: NextConfig = {
  // Every locale has its own root layout (app/(en), app/fr, app/de, app/es); this page covers
  // URLs that match none of them.
  experimental: { globalNotFound: true },
  // Pages removed in the October 2026 fixes; old links land somewhere useful.
  ...(staticPreview
    ? {}
    : {
        async redirects() {
          return ["", "/fr", "/de", "/es"].flatMap((p) => [
            { source: `${p}/testimonials`, destination: `${p}/about`, permanent: true },
            { source: `${p}/legal/terms`, destination: `${p}/legal/booking-terms`, permanent: true },
          ]);
        },
      }),
  ...(staticPreview ? { output: "export" as const } : {}),
  images: staticPreview
    ? { unoptimized: true }
    : {
        // Photos are resized by Unsplash's CDN (see lib/image-loader.ts), not Vercel.
        loader: "custom",
        loaderFile: "./lib/image-loader.ts",
        // Cap the largest variant at 2048px: sharp on retina screens without oversized downloads.
        deviceSizes: [640, 750, 828, 1080, 1200, 1600, 2048],
        imageSizes: [64, 128, 256, 384],
      },
};

export default nextConfig;
