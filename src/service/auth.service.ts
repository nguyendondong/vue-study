import axios from '@/config/axios'
import type { Ref, UnwrapRef } from 'vue'

class AuthService {
  logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
  }

  async register(name: string, email: string, password: string, confirm_password: string) {
    return await axios.post('auth/register', {
      name: name,
      email: email,
      password: password,
      confirm_password: confirm_password
    })
  }
}
export default new AuthService()
