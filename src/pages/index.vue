<script setup lang="ts">
import { useRoute } from "vue-router/auto";
definePage({
	meta: {
		title: "Home",
		description: "Home Page",
		navlink: true,
	},
});
const route = useRoute();
</script>

<template>
	<h2>{{ route.meta.title }}</h2>
	<p>{{ route.meta.description }}</p>
</template>

<style></style>
