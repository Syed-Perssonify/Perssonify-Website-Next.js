/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com', 'pexels.com'],
    unoptimized: true
  },
  experimental: {
    appDir: false
  },
  async redirects() {
    return []
  },
  async rewrites() {
    return []
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
    }
    return config
  }
}

module.exports = nextConfig