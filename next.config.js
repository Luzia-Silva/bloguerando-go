/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig

const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
  // remotePatterns: [
  //   {
  //     protocol: 'https',
  //     hostname: 'giphy.com',
  //     port: '',
  //     pathname: 'embed/BEob5qwFkSJ7G',
  //   },
  // ],
  images: {
    domains: ['giphy.com/embed/BEob5qwFkSJ7G'],
  },
})
