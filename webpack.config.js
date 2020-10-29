const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
    entry: './src/scripts/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: '/node_modules/',
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'file-loader',
          options:{
            publicPath:'vendor/fonts/Inter'
          }
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader',
            options:{
              publicPath:'images'
            }
          },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            'postcss-loader',
          ],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Main template',
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin()
    ],
  };