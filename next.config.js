/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/layout_triamici',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'live.staticflickr.com' },
    ],
  },
}

module.exports = nextConfig
