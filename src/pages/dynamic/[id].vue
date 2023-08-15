<script setup lang="ts">
import { useRoute, useRouter } from "vue-router/auto";

definePage({
	meta: {
		title: "Dynamic w. Param",
		description: "requested with id:",
		navlink: false,
	},
});
const r = useRoute();
const router = useRouter();
</script>
<template>
	<h2>id:{{ r.meta.title }}</h2>
	<p>
		{{ r.meta.description }} <b>{{ r.params.id }}</b>
	</p>
	<a @click.prevent="router.back()" href="#">back</a>
</template>
