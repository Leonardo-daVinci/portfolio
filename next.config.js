/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "", 
  },
  distDir: "build",
  basePath: " /portfolio",
  assetPrefix: "/portfolio"
}

module.exports = nextConfig
