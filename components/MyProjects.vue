<template>
  <div class="flex flex-1 gap-4 mt-8 w-[50rem]">
    <div
      v-if="userProjects"
      v-for="project in userProjects.data"
      class="border-4 min-w-[400px] max-w-[400px]"
    >
      <p class="text-2xl">{{ project.name }}</p>
      <span class="text-2xl">{{ project.description }}</span>
      <div class="flex">
        <p class="text-2xl">{{ project.start_date }}</p>
        <p class="text-2xl">{{ project.end_date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useUserStore } from "~/store/user.store";
const userProjects = ref();

onMounted(async () => {
  const userStore = useUserStore();
  userProjects.value = await axios.get(
    `http://localhost:8000/api/userprojects/${userStore.user.id}`
  );
  console.log(userProjects.value);
});
</script>
