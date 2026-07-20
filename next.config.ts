/** @type {import('next').NextConfig} */
const repo = "crofton-bookstore";
const isGhPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGhPages ? `/${repo}` : "",
  assetPrefix: isGhPages ? `/${repo}/` : undefined,
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
