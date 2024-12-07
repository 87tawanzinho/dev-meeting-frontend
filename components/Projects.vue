<template>
  <div>
    <h2>Olá, {{ userStore.user.name }}</h2>
    <ElInput placeholder="Procurar" class="w-24">
      <template #prefix>
        <Icon name="mdi:search-web" size="24" />
      </template>
    </ElInput>
  </div>
</template>

<script setup>
import { useUserStore } from "~/store/user.store";

const userStore = useUserStore();
</script>
