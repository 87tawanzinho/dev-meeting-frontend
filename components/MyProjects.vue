<template>
  <div class="flex flex-wrap flex-1 gap-4 mt-8">
    <div
      v-if="userStore.user.projects"
      v-for="project in userStore.user.projects"
      class="border min-w-[350px] max-w-[350px] text-[#222222] text-xl border-slate-600 rounded-2xl p-1 cursor-pointer hover:opacity-60"
    >
      <p class="">{{ project.name }}</p>
      <p class="">{{ project.description }}</p>
      <p class="">{{ project.type }}</p>
      <div class="flex">
        <p class="">{{ project.start_date }}</p>
        <p class="">{{ project.end_date }}</p>
      </div>
    </div>
    <div v-else class="text-lg text-black">
      Você ainda não tem projetos {{ userStore.user }}
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useUserStore } from "~/store/user.store";
const userStore = useUserStore();

onMounted(async () => {});
</script>

<style></style>
