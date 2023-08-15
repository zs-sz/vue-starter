<script setup lang="ts">
import { useRouter, useRoute } from "vue-router/auto";

const props = defineProps({
	noHome: { type: Boolean, required: false, default: false },
});

const router = useRouter();
const route = useRoute();
let allRoutes = router.getRoutes();
if (props.noHome) {
	allRoutes = allRoutes.filter((item) => item.path !== "/");
}
</script>

<template>
	<nav>
		<ul>
			<li v-for="r in allRoutes">
				<a :class="{ selected: route.path === r.path }" :href="r.path">{{ r.meta.title }}</a>
			</li>
		</ul>
	</nav>
</template>

<style></style>
