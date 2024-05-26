import axios from '@/config/axios'
import type { Ref, UnwrapRef } from 'vue'

class AuthService {
    async login(email: UnwrapRef<string>, password: UnwrapRef<string>, rememberMe: UnwrapRef<boolean>)  {
     const response = await axios.post("auth/login", {
      email: email,
      password: password,
      remember_me: rememberMe

    })
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);

      return response
  }
   logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token');

  }

   async register(name: string, email: string, password: string, confirm_password: string) {
     return await axios.post("auth/register", {
      name: name,
      email: email,
      password: password,
      confirm_password: confirm_password
    })
  }
}
export default new AuthService()
