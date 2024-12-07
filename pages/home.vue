<template>
  <div class="flex">
    <SideBar />
  </div>
</template>

<script setup>
import SideBar from "~/layouts/SideBar.vue";

// fix home when reload after
definePageMeta({});
</script>
