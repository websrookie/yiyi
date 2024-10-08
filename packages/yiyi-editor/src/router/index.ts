import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: () => import('./../views/list.vue'),
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/edit.vue'),
    },
  ],
});

export default router;
