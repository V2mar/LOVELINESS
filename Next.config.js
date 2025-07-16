/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // À désactiver après correction des erreurs
  },
  eslint: {
    ignoreDuringBuilds: true, // À désactiver après correction ESLint
  }
}

module.exports = nextConfig