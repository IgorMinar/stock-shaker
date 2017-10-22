const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      //{ test: /\.txt$/, use: 'raw-loader'},
      { test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {warnings: false, pure_getters: true, passes: 3},
      output: {comments: false},
      sourceMaps: true
    }),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;