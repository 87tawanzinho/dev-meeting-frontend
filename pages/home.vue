<template>
  <div class="flex flex-col">
    <TopBar />
    <SideBar />
  </div>
</template>

<script setup>
import SideBar from "~/layouts/SideBar.vue";
import TopBar from "~/layouts/TopBar.vue";

// fix home when reload after
definePageMeta({});
</script>
