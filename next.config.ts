import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: ["192.168.4.210"],
  trailingSlash: true,
  // GitHub Pages project site example (from your screenshot):
  // https://<user>.github.io/<repo>/
  basePath: "/quynh_tram_xinh_dep",
  assetPrefix: "/quynh_tram_xinh_dep",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/quynh_tram_xinh_dep",
  },
  images: {
    // Static export doesn't include Next.js image optimization pipeline.
    unoptimized: true,
  },
};

export default nextConfig;
