/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.icons8.com"],
  },

  ...(process.env.NODE_ENV === "production" && { basePath: "/cctv" }),

  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
};

module.exports = nextConfig;
