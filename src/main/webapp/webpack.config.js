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
    path: DIST_DIR + "/js",
    filename: "bundle.js",
    //publicPath: "./",
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  }
};