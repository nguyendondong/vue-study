import axios from 'axios'

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error.response)
  }
)

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:3000/api/v1/'

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
  return config
})


export default axios
