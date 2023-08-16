<script setup lang="ts">
import { useRoute, useRouter } from "vue-router/auto";
definePage({
	meta: {
		title: "Dynamic",
		description: "Dynamic Index.vue, This route can except /:id as param",
		navlink: true,
	},
});

let testData: string[] = [];
for (let i = 0; i < 10; i++) {
	testData.push((Math.random() * Date.now()).toString(16));
}
const r = useRoute();
const router = useRouter();

const requestDynamic = (id) => {
	router.push(`${r.name}${id}/`);
};
</script>
<template>
	<h2>{{ r.meta.title }}</h2>
	<p>{{ r.meta.description }}</p>
	<ul class="cards">
		<li class="card" v-for="id in testData">
			<a @click.prevent="requestDynamic(id)" href="#">{{ id }}</a>
		</li>
	</ul>
</template>
<style>
body {
	background-color: #f2f2f2;
}
ul.cards {
	padding: 0;
	list-style-type: none;
}
</style>
