/** @type {import('next').NextConfig} */
const { DEPRECATED_URL } = "http://localhost:4200/deprecated/"

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      // Check if the content exists in Next.js
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/:path*',
        destination: 'https://vercel-poc-ember.vercel.app/:path*',
      }
    ]
  }
}
