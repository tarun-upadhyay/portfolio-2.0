/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "pbs.twimg.com",
      "uploads-ssl.webflow.com",
      "cdn.pixabay.com",
      "github-readme-streak-stats.herokuapp.com",
      "github-readme-stats.vercel.app",
    ],
  },
  output: "export",
};

module.exports = nextConfig;
