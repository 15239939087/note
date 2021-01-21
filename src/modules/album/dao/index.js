import Dao from "@/base/dao";

const apiDao = {
  getDataList: (options = {}) =>
    Dao.webAxios({
      url: "/table",
      method: "get",
      ...options
    })
};

export default apiDao;
