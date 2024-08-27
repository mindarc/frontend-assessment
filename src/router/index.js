import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/exerciseone',
      name: 'exercise one',
      component: () => import('../views/exerciseOneView.vue')
    },
    {
      path: '/exercisetwo',
      name: 'exercise two',
      component: () => import('../views/exerciseTwoView.vue')
    }
  ]
})

export default router
