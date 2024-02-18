const withTM = require('next-transpile-modules')(['three'])

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    config.module.rules.push({
      test: /\.glsl/,
      use: ['raw-loader']
    })
    return config
  },
  images: {
    domains: ['camo.githubusercontent.com']
  }
})
