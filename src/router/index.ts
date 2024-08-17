import { createRouter, createWebHistory } from 'vue-router'
import ExerciseOne from '../views/ExerciseOne.vue'
import ExerciseTwo from '../views/ExerciseTwo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ExerciseOne',
      component: ExerciseOne
    },
    {
      path: '/exercise-two',
      name: 'ExerciseTwo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ExerciseTwo
    }
  ]
})

export default router
