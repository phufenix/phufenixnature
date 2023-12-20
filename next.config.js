/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    SEND_GRID_API_KEY: process.env.SEND_GRID_API_KEY,
  },
  ignoreBuildErrors: true,
};

module.exports = nextConfig;
