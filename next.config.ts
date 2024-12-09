import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  // <=== enables static exports
  basePath: "/audsostrom.github.io",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
