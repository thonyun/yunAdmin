import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/about/index',
    // component: Home
  },
  {
    path: '/about',
    name: 'About',
    redirect: '/about/index',
    children: [
      {
        path: 'index',
        component: () => import('../views/about/index.vue'),
        name: 'aboutIndex'
      }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    redirect: '/test/index',
    children: [
      {
        path: 'index',
        name: 'TestIndex',
        component: () => import('../views/test/index.vue')
      }
    ]
  },
  {
    path: '/echarts',
    name: 'Echarts',
    redirect: '/echarts/index',
    children: [
      {
        path: 'index',
        name: 'Echarts',
        component: () => import('../views/echarts/index.vue')
      }
    ]
  },
  {
    path: '/three',
    name: 'Three',
    redirect: '/test/index',
    children: [
      {
        path: 'index',
        name: 'ThreeIndex',
        component: () => import('../views/three/index.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
