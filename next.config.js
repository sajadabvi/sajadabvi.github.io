/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export mode
  images: {
    unoptimized: true, // Needed for static export
  },
  basePath: "/sajadabvi.github.io", // Important: Set GitHub Pages subdirectory
  assetPrefix: "/sajadabvi.github.io/", // Ensures static assets load correctly
  trailingSlash: true, // Ensures correct URL structure
};

module.exports = nextConfig;
