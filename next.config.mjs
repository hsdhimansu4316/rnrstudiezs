/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    domains: ["blog.rnrstudiezs.com", "i0.wp.com"], // Add the external image domains here
    path: isProd ? "https://www.rnrstudiezs.com/_next/image/" : "", // Use the correct path based on the environment
  },
  assetPrefix: isProd ? "https://www.rnrstudiezs.com" : "",

  future: {
    webpack5: true,
  },
};

export default nextConfig;