import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'gravatar.com',
      'secure.gravatar.com',
      'lh3.googleusercontent.com' 
    ]
  }
};

export default nextConfig;
