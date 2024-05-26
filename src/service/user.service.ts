import axios from '@/config/axios.ts'
import AuthHeader from '@/service/auth-header.ts'

class UserService {
   Profile() {
    return axios.get("users/profile", {
      headers: {
        Authorization: AuthHeader.getAuthHeader().Authorization
      }
    })
  }
}

export default new UserService()