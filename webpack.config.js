const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebPackNotifierPlugin = require('webpack-notifier');
const webpack = require('webpack');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  mode: 'development',
  entry: {
    app: PATHS.source + '/index.js'
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js'
  },
  // optimization: {
  // // https: //webpack.js.org/guides/code-splitting
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    compress: true,
    port: 9002,
    hot: true
      // lazy: true
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
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              // https://github.com/tcoopman/image-webpack-loader
              // mozjpeg: {}, optipng: {}, pngquant: {}, gifsicle: {}, webp: {}             
              diasble: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'FSD 2nd Task',
      filename: 'index.html',
      template: PATHS.source + '/index.pug',
      inject: true
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WebPackNotifierPlugin({
      title: 'FSD 2nd Task Notifier'
    })
  ]
};