import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import RoleSelect from "../views/RoleSelect.vue";
import RootPage from "../views/RootPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/create",
    name: "RootPage",
    component: RootPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
