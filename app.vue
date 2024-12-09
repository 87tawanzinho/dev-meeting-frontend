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

    if (localStorage.getItem("projects")) {
      const projects = localStorage.getItem("projects");
      const userStore = useUserStore();
      userStore.setProjects(JSON.parse(projects));
    }
  }
});
</script>

<style>
p,
h2,
h1,
h3 {
  color: #535353;
}
</style>
