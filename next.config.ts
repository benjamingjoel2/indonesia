import type { NextConfig } from "next";

// Static preview export (see scripts/build-preview.mjs): no server, no image optimizer.
const staticPreview = process.env.NEXT_PUBLIC_STATIC_PREVIEW === "1";

const nextConfig: NextConfig = {
  ...(staticPreview ? { output: "export" as const } : {}),
  images: {
    unoptimized: staticPreview,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
