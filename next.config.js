/** @type {import('next').NextConfig} */
const i18n = require('./i18n.config');
const {nanoid} = require('nanoid');
const {generateSearchIndex, generateSiteMapXML} = require('@sitebud/sdk-lib');

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/_assets/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  swcMinify: true,
  i18n,
  generateBuildId: async () => {
    const newId = nanoid();
    await generateSearchIndex(newId);
    await generateSiteMapXML();
    return newId;
  },
  webpack: (config, { webpack, dev }) => {
    config.resolve.fallback = {
      fs: false
    };
    return config;
  },
}

module.exports = nextConfig
