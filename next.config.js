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
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
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
