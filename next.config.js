/** @type {import('next').NextConfig} */
// const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: { layoutRaw: true },
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
