/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thecatpaws.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
