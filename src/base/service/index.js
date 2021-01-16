import http from "@/base/http";

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    http.get(url, { params: params }).then(res => {
      res.data ? resolve(res.data) : reject(res);
    });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    http.post(url, params).then(res => {
      res.data ? resolve(res.data) : reject(res);
    });
  });
}
