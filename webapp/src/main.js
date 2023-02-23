import Vue, { createApp } from "@vue/compat";
import { createRouter, createWebHashHistory } from "vue-router";
import BootstrapVue from "bootstrap-vue";

import App from "./App.vue";
import routes from "./routes";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/styles/main.scss";

const r = createRouter({
  history: createWebHashHistory(),
  routes,
});

Vue.use(BootstrapVue);
const app = createApp(App);
app.use(r);
app.mount("#app");
