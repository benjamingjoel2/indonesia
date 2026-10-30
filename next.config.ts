import type { NextConfig } from "next";

// Static preview export (see scripts/build-preview.mjs): no server, no image optimizer.
const staticPreview = process.env.NEXT_PUBLIC_STATIC_PREVIEW === "1";

const nextConfig: NextConfig = {
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
