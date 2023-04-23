import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: () => import('../views/EventListView.vue'),
      props: route => ({page: parseInt(route.query.page) || 1})
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props:  true,
      component: () => import('../views/EventDetailsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
