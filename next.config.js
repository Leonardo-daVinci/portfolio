/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  images: {unoptimized: true}
}

module.exports = nextConfig
