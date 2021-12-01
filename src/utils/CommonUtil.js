const CommonUtil = {
  isSuccess(data = {}) {
    const code = typeof data === "string" ? data : data.code;
    return code != null ? code === 200 : true;
  }
};
export default CommonUtil;
