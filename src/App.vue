<script setup lang="ts">
import { useStore } from "vuex";

// Store
const store = useStore();
console.log(new Date(store.state.createdAt));
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style scoped></style>
