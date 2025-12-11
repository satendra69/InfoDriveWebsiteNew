// module.exports = {
//   // output: "export",
//   // distDir: "_static",
//   webpack: (config) => {
//     config.resolve.fallback = { fs: false };
//     return config;
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // Required for DigitalOcean Static Hosting
  distDir: "out",          // DO reads from /out folder
  trailingSlash: true,     // Prevents folder routing issues
  images: {
    unoptimized: true      // Required because image optimization needs a server
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;


