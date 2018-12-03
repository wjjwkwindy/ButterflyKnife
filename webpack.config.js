const package = require("./package.json");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'butterfly-knife.' + package.version + '.js',
    path: path.resolve("lib")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: []
};
