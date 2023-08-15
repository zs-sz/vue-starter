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
	<ul>
		<li v-for="id in testData">
			<a @click.prevent="requestDynamic(id)" href="#">{{ id }}</a>
		</li>
	</ul>
</template>
