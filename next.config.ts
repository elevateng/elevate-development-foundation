import type { NextConfig } from "next";

const legacyOrigin = "https://elevate-development-foundation.abiola-adebiyi.chatgpt.site";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/images/:path*", destination: `${legacyOrigin}/images/:path*` },
      { source: "/reports/:path*", destination: `${legacyOrigin}/reports/:path*` },
    ];
  },
};

export default nextConfig;
