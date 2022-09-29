<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
	border-radius: 0.75rem;
	padding: 1rem;
	border: 2px solid var(--clr-primary);
	margin: 2rem auto;
	width: 100%;
	// width: clamp(20em, 81vw, 35em);
}
// @media (min-width: 40em) {
// 	.card {
// 		width: clamp(38em, 50vw, 50em);
// 	}
// }
</style>
