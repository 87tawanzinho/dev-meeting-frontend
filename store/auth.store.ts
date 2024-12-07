// stores/auth.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    loggedIn: false, // Estado inicial de autenticação
  }),

  actions: {
    login() {
      this.loggedIn = true;
      if (process.client) {
        localStorage.setItem("loggedIn", "true");
      }
    },

    logout() {
      this.loggedIn = false;
      if (process.client) {
        localStorage.removeItem("loggedIn");
      }
    },

    checkLogin() {
      // Verifica se o usuário está logado no localStorage
      if (process.client && localStorage.getItem("loggedIn")) {
        this.loggedIn = true;
      }
    },
  },
});
