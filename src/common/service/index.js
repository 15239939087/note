import Dao from "../dao";

export function getTableInfo(params = {}) {
  return Dao.get("table", params);
}
export function post(url, params = {}) {
  return Dao.post(url, params);
}
