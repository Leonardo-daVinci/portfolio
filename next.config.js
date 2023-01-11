/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "", 
  },
  distDir: "build",
}

module.exports = nextConfig
