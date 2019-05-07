const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: PATHS.source + '/index.js',
  output: {
    path: PATHS.build,
    filename: 'main.js'
  },
  module: {
    rules: [{
        test: /\.pug$/,
        use: [{
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: PATHS.source + '/index.pug',
      inject: true
    })
  ]
};