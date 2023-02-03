/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    deviceSizes: [540, 1024],
  },
  env: {
    HOST: process.env.HOST,
    ASSETS: process.env.ASSETS
  },
  i18n
};

module.exports = nextConfig;
