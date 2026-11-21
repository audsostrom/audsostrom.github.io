import type { NextConfig } from "next";

// Static export for GitHub Pages. No basePath: this is a user-pages repo served at the domain root
// (actions/configure-pages also injects the correct basePath in CI).
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
