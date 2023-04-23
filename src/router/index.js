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
      name: 'event-layout',
      props:  true,
      component: () => import('../views/event/LayoutEvent.vue'),
      children: [
        {
          path: '',
          name: 'event-details',
          component: () => import('../views/event/EventDetails.vue')
        },
        {
          path: 'register',
          name: 'event-register',
          component: () => import('../views/event/RegisterEvent.vue')
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: () => import('../views/event/EditEvent.vue')
        },
      ]
    },
   
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
