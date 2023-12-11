const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  mode: 'production',
  module: {
    rules: [
      {test: /\.svg$/, use: 'svg-inline-loader'},
      {test: /\.(scss|css)$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']},
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html'),}),
    new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    watchFiles: path.join(__dirname, 'public'),
    port: 9000,
  },
  watchOptions: {
    poll: true,
  },
}