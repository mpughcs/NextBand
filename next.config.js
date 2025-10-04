/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // Enable SPA-like routing
  trailingSlash: false,
  // Optimize for client-side navigation
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
