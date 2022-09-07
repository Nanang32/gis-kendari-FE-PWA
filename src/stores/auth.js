import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    user: {
        name : null,
        email: null
    }
  }),
  getters: {
    getToken: (state) => {
      return state.token;
    }
  },
  persist: true,
});
