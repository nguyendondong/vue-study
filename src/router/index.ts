import { createRouter, createWebHistory } from 'vue-router'
import { type IStaticMethods } from 'preline/preline'
import BaseLayout from '@/components/admin/layout/BaseLayout.vue'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}
import HomeView from '@/views/frontend/HomeView.vue'
import LoginView from '@/views/admin/auth/LoginView.vue'
import DashboardView from '@/views/admin/dashboard/DashboardView.vue'
import RegisterView from '@/views/admin/auth/RegisterView.vue'
import UserView from '@/views/admin/user/UserView.vue'
import VeryfyView from '@/views/admin/auth/ConfirmView.vue'

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
      name: 'Admin',
      component: BaseLayout,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: DashboardView,
          meta: {
            requiresAuth: true,
            headerTitle: 'Dashboard',
            searchConfig: {},
            storeConfig: {}
          }
        },
        {
          path: 'users',
          name: 'Users',
          component: UserView
        }
      ]
    },

    {
      path: '/auth',
      children: [
        {
          path: 'login',
          name: 'Login',
          component: LoginView
        },
        {
          path: 'register',
          name: 'Register',
          component: RegisterView
        },
        {
          path: 'confirm-email/:token',
          name: 'verifyEmail',
          component: VeryfyView
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.getItem('access_token') && !to.path.includes('auth')) {
    next({ name: 'Login' })
  } else if (to.name === 'Admin') {
    next({ name: 'Dashboard' })
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
