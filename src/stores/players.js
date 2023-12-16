import { defineStore } from 'pinia'

export const usePlayersStore = defineStore('players', {
  state: () => {
    return {
      players: null
    }
  },
  persist: true
})
