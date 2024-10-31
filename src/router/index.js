import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/modal-form',
      name: 'modal-form',
      component: () => import('../views/ModalFormView.vue')
    },
    {
      path: '/select',
      name: 'select',
      component: () => import('../views/SelectView.vue')
    },
    {
      path: '/bar-chart',
      name: 'bar-chart',
      component: () => import('../components/chart/CustomBar.vue')
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import('../components/icons/IconView.vue')
    },
    {
      path: '/form-validate',
      name: 'form-validate',
      component: () => import('../views/FormView.vue')
    },
  ],
  linkActiveClass: 'active',
})

export default router
