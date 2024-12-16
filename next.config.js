/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Remove distDir as it might conflict with the output setting
};

module.exports = nextConfig;
