<script setup lang="ts">
import { useRoute } from "vue-router/auto";
definePage({
	meta: {
		title: "Home",
		description: "Home Page",
	},
});
const route = useRoute();
</script>

<template>
	<h2>{{ route.meta.title }}</h2>
</template>

<style></style>
