import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    basePath: '/my-site',
    images: {
      unoptimized: true,
    },
    // Only needed if your GitHub repo isn't "username.github.io"
    // basePath: '/repo-name',
    trailingSlash: true,
};

export default nextConfig;
