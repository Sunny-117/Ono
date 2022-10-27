const { resolve } = require('path');
const MdToHtmlPlugin = require('./plugins/md-to-html-plugin');

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/app.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  plugins: [
    new MdToHtmlPlugin({
      template: resolve(__dirname, 'test.md'),
      filename: 'test.html'
    })
  ]
}