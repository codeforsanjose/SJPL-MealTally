const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    inline: true,
    progress: true,
    contentBase: './src',
    port: 8080
  },
  entry: [
    path.resolve(__dirname, 'src/main.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'public/bundle'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, include: path.resolve(__dirname, 'src'), use: ['style-loader', 'css-loader'] },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'src'), exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.json?$/, include: path.resolve(__dirname, 'config'), use: 'json-loader' },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:3000' })
  ]
};
