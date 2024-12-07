// plugins/auth.js

import { useAuthStore } from "~/store/auth.store";

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore();

  // Espera até que o cliente seja inicializado
  if (process.client) {
    await authStore.checkLogin(); // Verifica o estado de login no localStorage
  }
});
