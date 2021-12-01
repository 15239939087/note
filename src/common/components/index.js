import Button from "./button/Button";

const ApplicationUI = {
  Button
};

export default {
  install(Vue) {
    Object.keys(ApplicationUI).forEach(key => {
      Vue.component(key, ApplicationUI[key]);
    });
  }
};
