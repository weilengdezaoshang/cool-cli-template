/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  i18n: {
    locales: ['zh-CN', 'en'],
    defaultLocale: 'zh-CN',
  },
}

module.exports = nextConfig
