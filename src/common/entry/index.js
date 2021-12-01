import Vue from "vue";

import Element from "element-ui";
import Directives from "../directives";
import Component from "../components";
import VueCompositionApi from "@vue/composition-api";
Vue.use(Directives);
Vue.use(VueCompositionApi);
Vue.use(Component);
Vue.use(Element, {
  size: "small"
});
