import { createRouter, createWebHistory } from 'vue-router'
import { type IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
import HomeView from '@/views/frontend/HomeView.vue'
import LoginView from '@/views/backend/LoginView.vue'
import DashboardView from '@/views/backend/DashboardView.vue'
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
      children: [
        {
          path: '',
          name: 'login',
          component: LoginView
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: DashboardView
        }
      ]
    }
  ]
})
router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100)
  }
});

export default router
