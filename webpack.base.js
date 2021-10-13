const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const OUTPUT_PATH = path.join(process.cwd(), 'public')

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: OUTPUT_PATH
  },
  ignoreWarnings: [
    {
      message: /the request of a dependency is an expression/,
    }
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            esModule: false,
            sources: {
              urlFilter: (attribute, value, resourcePath) => {
                // The `attribute` argument contains a name of the HTML attribute.
                // The `value` argument contains a value of the HTML attribute.
                // The `resourcePath` argument contains a path to the loaded HTML file.

                // if it's an absolute url we consider it pointing to a static resource
                return !/^\//.test(value)
              }
            }
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        context: path.resolve(__dirname),
        from: 'node_modules/leaflet/dist/images/*'
      }]
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      filename: path.join(OUTPUT_PATH, 'index.html'),
      chunks: ['app'],
      scriptLoading: 'blocking'
    })
  ].filter(Boolean)
}
