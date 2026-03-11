/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['framer-motion'],
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
