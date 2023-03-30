import { defineStore } from "pinia";

export const useCommentsStore = defineStore("comments", {
  state: () => {
    return {
      comments: null,
    };
  },
  persist: true,
});