import { get } from "@/base/service";

const api = {
  // home_api: params => post("/table", stringify(params)), //不使用get post封装 stringify看需求使用
  getAlbumList: params => get("/table", params) //使用get post封装
};

export default api;
