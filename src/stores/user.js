import { defineStore } from 'pinia'
import jwt_decode from 'jwt-decode'

export const useUserStore = defineStore('user', {
  state: () => {
    const token = localStorage.getItem('token')
    const user = token ? jwt_decode(token) : false
    return {
      user
    }
  },
  actions: {
    signin(user) {
      this.user = user
      localStorage.setItem('token', user.token)
    },
    signout() {
      this.user = false

      localStorage.removeItem('token')
    }
  },
  persist: true
})
