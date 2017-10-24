const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const rxjsMapping = require('rxjs/_esm5/path-mapping');

module.exports = (env = {}) => ({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },

  resolve: {
    // RxJS v5 needs a custom opt-in to be resolved as ESM
    alias: rxjsMapping(path.resolve(__dirname, 'node_modules'))
  },

  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env' ]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),

    new webpack.optimize.UglifyJsPlugin(
        env.debugProduction ? {
          mangle: false,
          compress: {sequences: false, warnings: false, pure_getters: true, passes: 3},
          output: {comments: 'all', beautify: true},
          sourceMap: true
        } : {
          mangle: true,
          compress: {warnings: false, pure_getters: true, passes: 3},
          output: {comments: false},
          sourceMap: true
        }),

    new HtmlWebpackPlugin({template: './src/index.html'}),

    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'wba-report.html'
    })
  ],
  devtool: 'source-map',
  node: false
});