<template>
  <div>
    <div>
      <h2>Olá, {{ userStore.user.name }}</h2>
      <div class="flex gap-2">
        <ElInput placeholder="Procurar Projetos" class="w-24" v-model="search">
          <template #prefix>
            <Icon name="mdi:search-web" size="24" />
          </template>
        </ElInput>
        <CreateNewProject />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/store/user.store";

const userStore = useUserStore();
const openNewProject = ref(false);
const search = ref();
</script>
