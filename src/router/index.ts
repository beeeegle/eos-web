// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        name: '',
        component: () => import('@/pages/index.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior () {
    return { top: 0 }
  },
})

export default router
