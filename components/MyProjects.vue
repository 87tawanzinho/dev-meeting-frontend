<template>
  <div class="flex flex-1 gap-4 mt-8 w-[50rem]">
    <div
      v-if="userStore.user.projects"
      v-for="project in userStore.user.projects"
      class="border-4 min-w-[400px] max-w-[400px]"
    >
      <p class="text-2xl">{{ project.name }}</p>
      <span class="text-2xl">{{ project.description }}</span>
      <div class="flex">
        <p class="text-2xl">{{ project.start_date }}</p>
        <p class="text-2xl">{{ project.end_date }}</p>
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
