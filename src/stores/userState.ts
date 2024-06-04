import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from '@/config/axios.ts'
import { useRouter } from 'vue-router'
// import authHeader from '@/service/auth-header.ts'

export const useUserState = defineStore('userState', () => {
  const user = ref<{
    email: string
  }>()
  const router = useRouter()

  const login = async (email: string, password: string, rememberMe: boolean) => {
    const response = await axios.post('auth/login', {
      email: email,
      password: password,
      rememberMe: rememberMe
    })
    const { data } = response
    user.value = data.dataUser
    localStorage.setItem('access_token', data.access_token)
    localStorage.setItem('refresh_token', data.refresh_token)
    localStorage.setItem('user', JSON.stringify(data.dataUser))

    await router.push('/admin/dashboard')
  }

  const logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
    user.value = undefined
  }

  const getProfile = async () => {
    return await axios.get('users/profile')
  }

  const register = async (
    name: string,
    email: string,
    password: string,
    confirm_password: string
  ) => {
    await axios.post('auth/register', {
      name: name,
      email: email,
      password: password,
      confirm_password: confirm_password
    })

    await router.push('/auth/login')
  }

  const isLoggedIn = computed(() => {
    return !!localStorage.getItem('access_token')
  })

  return { user, isLoggedIn, login, logout, getProfile, register }
})
