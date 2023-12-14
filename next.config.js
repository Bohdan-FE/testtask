/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'frontend-test-assignment-api.abz.agency',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
