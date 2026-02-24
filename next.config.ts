import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "http://192.168.56.1:3000",
    "http://0.0.0.0:3000"
  ],
};

module.exports = nextConfig;
