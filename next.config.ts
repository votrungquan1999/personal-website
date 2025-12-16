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
        hostname: "finance-calculator-lac.vercel.app",
      },
      {
        protocol: "https",
        hostname: "nghiep-hung-website-lilac-zeta.vercel.app",
      },
      {
        protocol: "https",
        hostname: "ai-rules-setup-aoj54y51z-votrungquan1999s-projects.vercel.app",
      },
    ],
  },
};

export default nextConfig;
