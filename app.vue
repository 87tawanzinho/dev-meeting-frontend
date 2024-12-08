<template>
  <div>
    <div class="flex">
      <NuxtLayout />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "./store/user.store";

onMounted(() => {
  if (process.client) {
    if (localStorage.getItem("user")) {
      const user = localStorage.getItem("user");
      const userStore = useUserStore();
      userStore.setUser(JSON.parse(user));
    }
  }
});
</script>
