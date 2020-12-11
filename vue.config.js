const path = require("path");

module.exports = {
  publicPath: "./",
  configureWebpack: () => ({
    entry: path.resolve(__dirname, "src/main.js")
  }),
  devServer: {
    disableHostCheck: true,
    port: 88,
    host: "0.0.0.0"
  }
};
