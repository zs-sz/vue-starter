<script setup lang="ts">
// import { useStore } from "vuex";

import { useLink, useRoute, useRouter } from "vue-router/auto";
import NavLinks from "./components/NavLinks.vue";
import Home from "./components/Home.vue";

const NAV_LABEL = "Navigation";
const BACK_TO_TOP = "back";
const backToTop = () => {
  document.documentElement.scrollTop = 0;
};
</script>

<template>
  <div class="app">
    <div class="mobile-only to-nav">
      <a href="#navigation">{{ NAV_LABEL }}</a>
    </div>
    <div id="navigation" class="nav-bar">
      <Home />
      <NavLinks />
      <button class="button mobile-only" @click="backToTop()">{{ BACK_TO_TOP }}</button>
    </div>
    <div class="page">
      <RouterView />
    </div>
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
}
.nav-bar {
  order: 2;
}
.page,
.nav-bar {
  min-height: 100vh;
}

@media screen and (min-width: 42rem) {
  .app {
    padding: 1rem;
  }
  .nav-bar {
    order: 0;
  }

  .mobile-only {
    display: none;
  }

  .page,
  .nav-bar {
    min-height: auto;
  }
  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 0 10px;
  }
}
</style>
