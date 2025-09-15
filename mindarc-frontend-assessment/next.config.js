const withTM = require('next-transpile-modules')([
  'gsap'
])

const withImages = require('next-images')

module.exports = withTM(withImages({
  images: {
    domains: ["via.placeholder.com"],
  },
  webpack(config, options) {
    return config
  }
}))