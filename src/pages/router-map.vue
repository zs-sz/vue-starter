<script setup lang="ts">
definePage({
	meta: {
		title: "Router Map",
		description: "All Routes",
		navlink: true,
	},
});
import { useRouter, useRoute } from "vue-router/auto";

const router = useRouter();
const route = useRoute();
const NONAME = "NoNe";
let allRoutes = router.getRoutes();
</script>

<template>
	<h2>{{ route.meta.title }}</h2>
	<p>{{ route.meta.description }}</p>
	<nav>
		<ul class="cards">
			<li class="card" v-for="r in allRoutes">
				<h4 class="card-title">{{ r.name || NONAME }}</h4>
				<dl class="kv">
					<dt>path</dt>
					<dd>{{ r.path }}</dd>
					<dt>navlink</dt>
					<dd>{{ r.meta.navlink }}</dd>
				</dl>
			</li>
		</ul>
	</nav>
</template>

<style>
body {
	background-color: #f2f2f2;
}

dl.kv {
	display: flex;
	flex-wrap: wrap;
	margin: 0 0 1rem;
	padding: 0;
	max-width: 800px;
}

dl.kv dd {
	padding: 0;
	margin: 0 0 0.5rem 0;
}
dl.kv > * {
	flex: 1 1 100%;
}

dl.kv dt {
	font-weight: 700;
}

dt:after {
	content: ":";
}

@media screen and (min-width: 22rem) {
	dl.kv > * {
		flex: 1 1 50%;
	}
	dd:after {
		content: "";
		transform: translate(-50%, 0);
		display: block;
		width: 200%;
		height: 1px;
		border-bottom: 1px solid #000;
		padding-bottom: 0.25rem;
		margin-bottom: 0.25rem;
	}
}
</style>
