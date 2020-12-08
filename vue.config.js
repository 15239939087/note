const path = require("path");

let BASE_URL = "";
if (process.env.NODE_ENV === "development") {
  BASE_URL = "./";
}
module.exports = {
  publicPath: BASE_URL,
  configureWebpack: () => ({
    entry: path.resolve(__dirname, "src/main.js")
  }),
  devServer: {
    disableHostCheck: true,
    port: 88,
    host: "0.0.0.0"
  }
};
