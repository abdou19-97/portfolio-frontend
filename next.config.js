/** @type {import('next').NextConfig} */
const nextConfig = {
  Images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "appmomentum.onrender.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
