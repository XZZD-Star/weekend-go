/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // GitHub Pages 静态导出：https://XZZD-Star.github.io/weekend-go/
  output: "export",
  basePath: "/weekend-go",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
