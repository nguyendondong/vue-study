class AuthHeader {
  static getAuthHeader() {
    if (!localStorage.getItem('access_token')) {
      return {}
    } else {
      return {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    }
  }
}

export default AuthHeader