/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com', 'cdn.prod.website-files.com'],
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
