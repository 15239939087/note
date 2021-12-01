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
    host: "0.0.0.0",
    proxy: {
      "/api/proxy": {
        // 代理目标网站
        target: "www.baidu.com",
        // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        changeOrigin: true,
        // 是否启用websockets
        ws: true,
        // 如果是https则设secure:true
        secure: false,
        // 路径重写
        pathRewrite: {
          "^/api": "/api" // 这种接口配置出来     https://www.baidu.com/api/login
          //'^/api': '/' 这种接口配置出来     https://www.baidu.com/login
        }
      }
    }
  }
};
module.exports = config;
