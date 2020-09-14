import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/example-one",
    name: "ExampleOne",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ExampleOne.vue")
  },
  {
    path: "/example-two",
    name: "ExampleTwo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ExampleTwo.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
