/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["img-cdn.2game.vn", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
