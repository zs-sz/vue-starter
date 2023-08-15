import { defineConfig } from "vite";
import VueRouter from "unplugin-vue-router/vite";
import Vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
      routesFolder: "src/pages",
      extensions: [".vue"],
      dts: "./typed-router.d.ts",
    }),
    Vue(),
  ],
});
