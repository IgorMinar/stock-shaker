const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const prodConfig = require('./webpack.config');

prodConfig.plugins = [
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    compress: {sequences: false, warnings: false, pure_getters: true, passes: 3},
    output: {comments: 'all', beautify: true},
    sourceMaps: false
  }),
  new HtmlWebpackPlugin({template: './src/index.html'})
];

module.exports = prodConfig;