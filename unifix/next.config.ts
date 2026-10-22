import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['nodemailer'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/photo-*',
      },
      {
        protocol: 'https',
        hostname: '20659463.fs1.hubspotusercontent-na1.net',
        pathname: '/hubfs/**',
      },
      {
        protocol: 'https',
        hostname: 'www.hotbot.com',
        pathname: '/articles/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
