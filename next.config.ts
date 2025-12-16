import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.stem-venture.com",
      },
      {
        protocol: "https",
        hostname: "app.stem-venture.com",
      },
      {
        protocol: "https",
        hostname: "nghiephung.vn",
      },
      {
        protocol: "https",
        hostname: "ai-rule.quanvo.dev",
      },
      {
        protocol: "https",
        hostname: "fin-cal.quanvo.dev",
      },
    ],
  },
};

export default nextConfig;
