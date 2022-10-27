const { resolve } = require('path');
const HtmelWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'src/app.js'),
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  devtool: 'source-map',
  resolveLoader: {
    modules: ['node_modules', resolve(__dirname, 'loaders')]
  },
  devServer: {
    port: 3333
  },
  module: {
    rules: [
      {
        test: /\.tpl$/,
        use: [
          'babel-loader',
          {
            loader: 'tpl-loader',
            options: {
              log: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmelWebpackPlugin({
      template: resolve(__dirname, 'index.html')
    })
  ]
}