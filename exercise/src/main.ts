import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/main.scss";
import store from "@/stores/store.js";
const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
