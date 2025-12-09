/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        port: '',
        pathname: '/**',
      },
    ],
    // Allow serving and optimization of SVGs from remote sources.
    // NOTE: enabling this can have security implications if you render
    // untrusted SVGs. If you'd rather avoid enabling this globally,
    // add `unoptimized` to the specific <Image /> instances instead.
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
