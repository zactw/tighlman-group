import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local images from the public folder (default)
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
