import Vue, { createApp } from "@vue/compat";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
const app = createApp(App);
app.mount("#app");
