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

export default axios
