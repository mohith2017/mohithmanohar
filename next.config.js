/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  basePath: "/portfolio",
  output: "export",  
  reactStrictMode: true,
};

module.exports = nextConfig;
