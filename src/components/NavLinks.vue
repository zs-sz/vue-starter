<script setup lang="ts">
import { useRouter, useRoute } from "vue-router/auto";

const props = defineProps({
	noHome: { type: Boolean, required: false, default: false },
});

const router = useRouter();
const route = useRoute();
let allRoutes = router.getRoutes();
if (props.noHome) {
	allRoutes.shift();
}
</script>

<template>
	<nav>
		<ul>
			<li v-for="r in allRoutes">
				<a v-if="route.path !== r.path" :href="r.path">{{ r.meta.title }}</a>
				<span class="selected" v-else>{{ r.meta.title }}</span>
			</li>
		</ul>
	</nav>
</template>

<style>
nav .selected {
	font-weight: 700;
}
</style>
