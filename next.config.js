/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['smarttoilet.com'],
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  distDir: '.next',
  output: 'standalone',
};

module.exports = nextConfig; 