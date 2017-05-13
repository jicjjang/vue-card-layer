var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: "/dist/",
    filename: "vue-card-layer.js"
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
