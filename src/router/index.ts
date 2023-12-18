import { createRouter, createWebHistory } from 'vue-router';
import DataDisplayView from '../views/DataDisplayView.vue';
import ResponsiveContentView from '../views/ResponsiveContentView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'responsive-content',
      component: ResponsiveContentView
    },
    {
      path: '/data-display',
      name: 'data-display',
      component: DataDisplayView
    }
  ]
});

export default router;
