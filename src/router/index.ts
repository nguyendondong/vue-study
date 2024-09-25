import { createRouter, createWebHistory } from 'vue-router'
import { type IStaticMethods } from 'preline/preline'
import BaseLayout from '@/components/admin/layout/BaseLayout.vue'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}
import HomeView from '@/views/frontend/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import DashboardView from '@/views/admin/dashboard/DashboardView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import UserView from '@/views/admin/user/UserView.vue'
import VeryfyView from '@/views/auth/ConfirmView.vue'
import CategoriesView from '@/views/admin/categories/CategoriesView.vue'


const router = createRouter({
  history: createWebHistory(''),
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
        },
        {
          path: 'categories',
          name: 'Categories',
          component: CategoriesView
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
  const accessToken = !!localStorage.getItem('access_token')

  if (!accessToken && to.path.startsWith('/admin')) {
    next({ name: 'Login' })
  } else if (accessToken && to.path.startsWith('/auth')) {
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
