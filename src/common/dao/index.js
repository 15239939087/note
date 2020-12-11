import axios from "axios";
import APIConfig from "../config/api";
const Dao = axios.create({
  baseURL: APIConfig.DOMAIN,
  withCredentials: true, // 跨站点访问控制请求
  timeout: 20000,
  crossDomain: true
});
/**
 * 请求配置
 * @see https://github.com/mzabriskie/axios
 */
Dao.interceptors.request.use(
  config => {
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

Dao.interceptors.response.use(
  response => {
    let { data, status, statusText: err_msg } = response;
    return { data, status, err_msg };
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default Dao;
