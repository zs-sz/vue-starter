<script setup lang="ts">
// import { useStore } from "vuex";

import { useLink, useRoute, useRouter } from "vue-router/auto";
import NavLinks from "./components/NavLinks.vue";
import Home from "./components/Home.vue";

const NAV_LABEL = "nav";
const BACK_TO_TOP = "back";
const backToTop = () => {
  document.documentElement.scrollTop = 0;
};
</script>

<template>
  <div class="mobile-only to-nav">
    <a href="#navigation">{{ NAV_LABEL }}</a>
  </div>
  <div id="navigation" autofocus="false" class="main-nav">
    <Home />
    <NavLinks />
    <button class="button mobile-only" @click="backToTop()">{{ BACK_TO_TOP }}</button>
  </div>
  <div class="page">
    <RouterView />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.main-nav {
  order: 2;
  padding-top: 1rem;
}
.page,
.main-nav {
  min-height: 100vh;
}

nav ul {
  padding: 0;
  list-style: none;
}
@media screen and (min-width: 42rem) {
  nav ul {
    display: flex;
    gap: 0 10px;
  }

  .main-nav {
    order: 0;
    padding: 0;
  }

  .mobile-only {
    display: none;
  }

  .page,
  .main-nav {
    min-height: auto;
  }
  .main-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
}
</style>
