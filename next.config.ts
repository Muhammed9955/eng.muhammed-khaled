import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/en",
        destination: "/",
      },
      {
        source: "/ar",
        destination: "/",
      },
      {
        source: "/en/courses",
        destination: "/courses",
      },
      {
        source: "/ar/courses",
        destination: "/courses",
      },
      {
        source: "/en/courses/:id",
        destination: "/courses/:id",
      },
      {
        source: "/ar/courses/:id",
        destination: "/courses/:id",
      },
    ];
  },
};

export default nextConfig;
