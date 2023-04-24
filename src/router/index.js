import EventService from '@/services/EventService'
import nprogress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'
import GStore from '../stores/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: () => import('../views/EventListView.vue'),
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/events/:id',
      name: 'event-layout',
      props: true,
      component: () => import('../views/event/LayoutEvent.vue'),
      beforeEnter: (to) => {
      return EventService.getDetailEvent(to.params.id)
          .then((response) => {
            GStore.event = response.data
          })
          .catch((error) => {
            console.log('error', error)
            if (error.response && error.response.status === 404) {
              return {
                name: '404-resource',
                params: { resource: 'event' }
              }
            } else {
              return {
                name: 'network-error'
              }
            }
          })
      },
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
        }
      ]
    },
    {
      path: '/event/:afterEvent(.*)',
      redirect: (to) => {
        return { path: `/events/${to.params.afterEvent}` }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: () => import('../views/NotFound.vue'),
      props: true
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: () => import('../views/NetworkError.vue')
    }
  ]
})

router.beforeEach(() => {
  nprogress.start()
})

router.afterEach(() => {
  nprogress.done()
})

export default router
