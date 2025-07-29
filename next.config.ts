/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This enables static exports
  // Optional: Add if you're using images
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;