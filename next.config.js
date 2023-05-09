/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  esmExternals: 'loose',
  // async redirects() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: '/404',
  //       permanent: false,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
