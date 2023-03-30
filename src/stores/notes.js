import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {
  state: () => {
    return {
      notes: null
    }
  },
  persist: true
})
