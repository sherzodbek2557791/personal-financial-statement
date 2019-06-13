import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import i18n from "@/plugins/i18n";
import directives from "@/plugins/directives";
import store from "@/plugins/store";
import { sync } from "vuex-router-sync";
import VueApexCharts from 'vue-apexcharts'

/**
 * Styles imported
 */
import "./assets/css/element.css";

import routes from "./routes";
import globals from "./globals";

Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueApexCharts);
Vue.prototype.$locale = i18n;


// This is a global mixin, it is applied to every vue instance
Vue.mixin({ data: () => globals });
directives.load();

const router = new VueRouter({ mode: "history", routes });
sync(store, router);

new Vue({
  i18n: i18n.plugin,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
