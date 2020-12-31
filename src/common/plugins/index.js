import Vue from "vue";

import Element from "element-ui";
import Directives from "../directives";
import Component from "../components";
Vue.use(Directives);
Vue.use(Component);
Vue.use(Element, {
  size: "small"
});
