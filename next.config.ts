// next.config.ts

import path from "path";
import { NextConfig } from "next";

// GitHub Pages project path: /kdt-next-website
// Configure static export so we can deploy the generated `out` folder.
const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export", // enables `next export` compatible build
  // Project site deployment under subpath
  basePath: "/kdt-next-website",
  assetPrefix: "/kdt-next-website/",
  images: { unoptimized: true }, // required for static export when using the app router
  trailingSlash: true, // makes relative links safer on GitHub Pages
  // Silence Turbopack root warnings by explicitly setting the root.
  // We force webpack for builds via scripts, but this prevents noisy warnings.
  turbopack: {
    root: __dirname,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@components": path.resolve(__dirname, "src/components"),
      "@app": path.resolve(__dirname, "src/app"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@public": path.resolve(__dirname, "public"),
    };
    return config;
  },
};

export default nextConfig;
