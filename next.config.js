/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/gh/devicons/devicon/**',
      },
    ],
    // Allow serving and optimization of SVGs from remote sources.
    // NOTE: enabling this can have security implications if you render
    // untrusted SVGs. If you'd rather avoid enabling this globally,
    // add `unoptimized` to the specific <Image /> instances instead.
    dangerouslyAllowSVG: true,
  },
  webpack: (config) => {
    // Add @ alias to the components folder
    config.resolve = config.resolve || {};
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      '@': path.join(__dirname, 'components'),
    });
    return config;
  },
};

module.exports = nextConfig;
