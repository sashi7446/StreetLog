import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/StreetLog',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
