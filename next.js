/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  images: {
    unoptimized: true,
  },
  distDir: 'docs',
  trailingSlash: true,
};

module.exports = nextConfig;