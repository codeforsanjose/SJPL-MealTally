const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/main.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './public/bundle/bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, include: [path.resolve(__dirname, 'src') ], use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, include: [path.resolve(__dirname, 'src') ], use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'src'), exclude: [/node_modules/], use: 'babel-loader' },
      { test: /\.json?$/, include: path.resolve(__dirname, 'config'), use: 'json-loader' },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json', '.scss']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new HtmlWebPackPlugin({     //when trying to refresh on profile page gives incorrect path and will crash need to look into how to use properly
    //   template: './index.html',
    //   filename: 'index.html'
    // })
  ]
};
