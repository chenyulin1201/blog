import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../components/home.vue')
  },
  {
    path: '/life',
    name: 'Life',
    component: () => import(/* webpackChunkName: "about" */ '../components/life/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
