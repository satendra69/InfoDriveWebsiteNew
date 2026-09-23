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
  trailingSlash: false,     // Prevents folder routing issues
  // Force Next.js to generate `.html` files for each page

  images: {
    unoptimized: true      // Required because image optimization needs a server
  },
  experimental: {
    appDir: false,
  },
  
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;


