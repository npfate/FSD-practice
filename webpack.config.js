const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebPackNotifierPlugin = require('webpack-notifier');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  mode: 'development',
  entry: {
    app: PATHS.source + '/app.js'
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
    hot: true,
    overlay: true
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
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              useRelativePath: true
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              // https://github.com/tcoopman/image-webpack-loader
              // mozjpeg: {}, optipng: {}, pngquant: {}, gifsicle: {}, webp: {}
              mozjpeg: {
                progressive: true,
                quality: 90
              },
              diasble: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
            useRelativePath: true
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'FSD 2nd Task',
      filename: 'index.html',
      template: PATHS.source + '/index.pug',
      inject: true
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WebPackNotifierPlugin({
      title: 'FSD 2nd Task Notifier'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};