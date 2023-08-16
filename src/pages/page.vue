<script setup>
import { useRoute } from "vue-router/auto";
definePage({
	meta: {
		title: "Page",
		description: "Single Page w. Meta",
		navlink: true,
	},
});
const route = useRoute();
</script>
<template>
	<h2>{{ route.meta.title }}</h2>
	<p>{{ route.meta.description }}</p>
</template>
