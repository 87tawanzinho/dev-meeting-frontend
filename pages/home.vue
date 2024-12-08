<template>
  <div class="flex flex-col w-screen">
    <TopBar />
    <SideBar />
  </div>
</template>

<script setup>
import SideBar from "~/layouts/SideBar.vue";
import TopBar from "~/layouts/TopBar.vue";
import { useUserStore } from "~/store/user.store";

// fix home when reload after
definePageMeta({});
const userStore = useUserStore();
onMounted(() => {
  if (!localStorage.getItem("user")) {
    return navigateTo("/login");
  }
});
</script>
