/** @type {import('next').NextConfig} */
const repo = "crofton-bookstore";
const isGhPages = process.env.GITHUB_PAGES === "true";
const basePath = isGhPages ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: isGhPages ? `/${repo}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
      },
    ],
  },
};

export default nextConfig;
