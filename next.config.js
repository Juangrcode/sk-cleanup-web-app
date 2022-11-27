/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiUsers: process.env.NEXT_PUBLIC_API_USERS,
  },
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
