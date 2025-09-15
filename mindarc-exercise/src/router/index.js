import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TabView from '../views/TabView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Exercise 1',
      component: HomeView
    },
    {
      path: '/second',
      name: 'Exercise 2',
      component: TabView
    }
  ]
})

export default router
