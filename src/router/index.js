import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/countries',
    component: () => import('@/layouts/Country.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Countries.vue')
      },
      {
        path: ':code',
        component: () => import('@/views/Country.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
