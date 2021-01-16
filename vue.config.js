const path = require("path");

const config = {
  publicPath: "./",
  configureWebpack: () => ({
    entry: path.resolve(__dirname, "src/main.js"),
    output: {
      filename: `js/[name].js`,
      chunkFilename: `js/[name].js`
    }
  }),
  devServer: {
    disableHostCheck: true,
    port: 88,
    host: "0.0.0.0"
  }
};
module.exports = config;
