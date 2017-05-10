var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
