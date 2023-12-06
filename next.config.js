/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  images: {unoptimized: true},
  experimental:{
    zoom: 1.25
  }
}

module.exports = nextConfig
