/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/Portfolio',
    images: {
      unoptimized: true,
    },
    assetPrefix: '/Portfolio/',
  }
  
  module.exports = nextConfig