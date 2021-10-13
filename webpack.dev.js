process.env.NODE_ENV = 'development'
const {merge} = require('webpack-merge')
const common = require('./webpack.base.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    allowedHosts: 'auto',
    hot: true,
    port: 5000,
    headers: {
      host: 'localhost:5000',
      'Access-Control-Allow-Origin': '*',
      'X-Frame-Options': 'sameorigin',
      'x-powered-by': null
    },
    compress: true
  },
  module: {
    rules: []
  },
  plugins: [
  ]
})
