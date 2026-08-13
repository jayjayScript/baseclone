/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: __dirname,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://baseclone-backend.vercel.app/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
