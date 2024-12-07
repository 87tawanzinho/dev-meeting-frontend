// middleware/auth.js

import { useAuthStore } from "~/store/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (!authStore.loggedIn) {
    // Se não estiver logado, redireciona para a página de login
    return navigateTo("/login");
  }
});
