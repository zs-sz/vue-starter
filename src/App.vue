<script setup lang="ts">
// import { useStore } from "vuex";

import { useLink, useRoute, useRouter } from "vue-router/auto";
import NavLinks from "./components/NavLinks.vue";
</script>

<template>
  <div class="app">
    <NavLinks />
    <RouterView />
  </div>
</template>

<style></style>
