const path = require('path')

module.exports = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = {
  images: {
    domains: [`${process.env.MEDIA_PUBLIC_DOMAIN}`],
  },
}
