import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging-api.tadarab.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.tadarab.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
