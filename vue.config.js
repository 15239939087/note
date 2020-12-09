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
    host: "0.0.0.0",
    proxy: {
      // proxy在这里是vue-cli3的写法，在vue-cli2中为proxyTable
      "^/api": {
        target: process.env.VUE_APP_ADMIN_API_DOMAIN,
        secure: false, // 若接口地址为https需配置这个
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
};
