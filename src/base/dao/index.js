import axios from "axios";
const Dao = {
  // 封装请求
  baseAxios(options = {}) {
    const baseOptions = {
      timeout: 20000,
      method: "get",
      withCredentials: true
    };
    return axios({
      ...baseOptions,
      ...options
    })
      .then(response => {
        const { data } = response;
        return Dao.checkCode(data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },
  /**
   * 检查返回的json的code字段
   * @param {JSON} json
   */
  checkCode(response) {
    const status = response.status;
    const message = response.msg || "error";
    if (status === "success") {
      return response;
    } else {
      const error = new Error(`Server error: ${status}, message: ${message}`);
      error.response = response;
      error.code = status;
      throw error;
    }
  },
  // 通过改变 options 处理请求
  webAxios: (options = {}) => {
    options = {
      baseURL: `http://rap2api.taobao.org/app/mock/272835`,
      withCredentials: true,
      ...options
    };
    return Dao.baseAxios(options);
  }
};

export default Dao;
