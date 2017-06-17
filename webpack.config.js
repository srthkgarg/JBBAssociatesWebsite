var webpack = require('webpack');
var fs = require('fs');

module.exports = {
  devtool: 'source-map',
  entry: {
    'bundle': __dirname + "\\src\\main\\webapp\\js\\EntryPoint.js"
  },
  node: {
    __filename: true
  },
  output: {
    path: __dirname + '\\src\\main\\webapp\\',
    filename: "[name].js",
    pathinfo: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          /*presets: ['react', 'es2015', 'stage-0'],
          plugins: ['babel-plugin-transform-decorators-legacy', 'babel-plugin-transform-regenerator']*/
        }
      },
      {
        test: /\.properties/,
        loader: 'properties-loader'
      }
    ]
  }
};