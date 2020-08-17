import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Sidebar from "./components/Sidebar.vue";
import PageNav from "./components/PageNav.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import axios from "axios";

import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.use(Buefy);

Vue.config.productionTip = false;

Vue.component("Sidebar", Sidebar);
Vue.component("PageNav", PageNav);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
