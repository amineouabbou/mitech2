const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'moneyinternational.be'],
  },
  experimental: { images: { allowFutureImage: true } },
  i18n,
}

module.exports = nextConfig
