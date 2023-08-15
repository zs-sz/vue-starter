<script setup>
import { useRoute } from "vue-router/auto";
definePage({
	meta: {
		title: "About Us",
		description: "Fill - Description",
	},
});
const route = useRoute();
</script>
<template>
	<h2>{{ route.meta.title }}</h2>
</template>
