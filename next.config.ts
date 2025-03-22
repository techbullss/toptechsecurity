import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export (no server required)
  images: {
    unoptimized: true, // Fixes image issues in static export
  },
  trailingSlash: true, // Ensures proper linking for static sites
  distDir: "out", // Optional: Specify output folder for hosting
};

export default nextConfig;

