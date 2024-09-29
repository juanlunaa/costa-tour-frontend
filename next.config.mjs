/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  experimental: {
    turbo: true,
  },
  swcMinify: true,
}

export default nextConfig
