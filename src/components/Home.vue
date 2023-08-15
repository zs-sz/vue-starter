<script setup lang="ts">
import { useRouter } from "vue-router/auto";
const router = useRouter();

const toHome = () => {
	router.push("/");
};
</script>

<template>
	<div>
		<a title="home" @prevent.click="toHome()" href="/"><img class="branding" src="/icon.svg" alt="home" /></a>
	</div>
</template>

<style></style>
