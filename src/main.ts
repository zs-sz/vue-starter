import { createApp, h } from "vue";
import { createStore } from "vuex";
import "./style.css";
import App from "./App.vue";

import { createWebHistory, createRouter, setupDataFetchingGuard } from "vue-router/auto";

// file based routing, defaults to -> .src/pages/index.vue
const router = createRouter({
	history: createWebHistory(),
	extendRoutes: (routes) => {
		return routes;
	},
});

setupDataFetchingGuard(router);

const store = createStore({
	state() {
		return {
			createdAt: Date.now(),
		};
	},
	mutations: {},
	actions: {},
});

const app = createApp({
	render: () => h(App),
});

app.use(store).use(router).mount("#app");
