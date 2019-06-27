var webpack = require("webpack");
var path = require("path");

var DIST_DIR = __dirname;
var SRC_DIR = __dirname;

module.exports = {
  devtool: "source-map",
  entry: SRC_DIR + "/js/index.js",
  node: {
    __filename: true
  },
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
    //publicPath: "./",
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [/node_modules/, /lib/],
        loader: "babel-loader",
        options: {
          presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  }
};