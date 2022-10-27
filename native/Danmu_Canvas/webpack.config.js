const { resolve } = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html')
    })
  ],
  devServer: {
    contentBase: './',
    open: true
  }
}