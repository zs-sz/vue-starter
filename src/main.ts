import { createApp, h } from "vue";
import { createStore } from "vuex";
import "./style.css";
import App from "./App.vue";

import { createWebHistory, createRouter, setupDataFetchingGuard } from "vue-router/auto";

const router = createRouter({
	history: createWebHistory(),
	extendRoutes: (routes) => {
		// routes.find((r) => r.name === '/')!.meta = {}
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

function syncLocal(state) {
	localStorage.setItem("state", JSON.stringify(state));
}

const app = createApp({
	render: () => h(App),
});

app.use(store).use(router).mount("#app");
