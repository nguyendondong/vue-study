import { createRouter, createWebHistory } from 'vue-router'
import { type IStaticMethods } from 'preline/preline'
import BaseLayout from '@/components/backend/layout/BaseLayout.vue'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}
import HomeView from '@/views/frontend/HomeView.vue'
import LoginView from '@/views/backend/LoginView.vue'
import DashboardView from '@/components/backend/layout/DashboardView.vue'
import RegisterView from '@/views/backend/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: BaseLayout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: DashboardView
        }
      ]
    },

    {
      path: '/auth',
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !localStorage.getItem('access_token') && !to.path.includes('auth')) {
    next({ name: 'login' })
  } else if (to.name === 'admin') {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit()
    }, 100)
  }
})

export default router
