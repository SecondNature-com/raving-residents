/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SECOND_NATURE_API_KEY: process.env.SECOND_NATURE_API_KEY,
    SECOND_NATURE_API_SECRET: process.env.SECOND_NATURE_API_SECRET,
    SECOND_NATURE_API_URL: process.env.SECOND_NATURE_API_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [
      'api-dev.rbp.secondnature.com',
      'api.rbp.secondnature.com',
      'sn-public-files-development.s3.amazonaws.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
