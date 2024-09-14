import axios from 'axios'
import router from '@/router'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_BE_API_URL


axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response)
)

axios.interceptors.request.use(config => {
  config.headers.Accept = 'application/json'
  config.headers['Access-Control-Allow-Origin'] = import.meta.env.VITE_FE_URL
  config.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, DELETE, PUT, PATCH'
  config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, Origin'
  const accessToken = localStorage.getItem('access_token')
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

export default axios
