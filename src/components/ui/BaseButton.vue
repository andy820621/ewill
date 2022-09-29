<template>
	<button v-if="!link" :class="mode">
		<slot></slot>
	</button>
	<a v-else :class="mode" @click.prevent="scrollToTarget">
		<slot></slot>
	</a>
</template>

<script setup>
const props = defineProps({
	mode: {
		type: String,
		required: false,
		default: null,
	},
	link: {
		type: Boolean,
		required: false,
		default: false,
	},
	target: {
		type: Object,
		required: false,
		default: null,
	},
});
function scrollToTarget() {
	let top = props.target.offsetTop;
	window.scrollTo(0, top);
}
</script>

<style lang="scss" scoped>
button,
a {
	display: inline-block;
	padding: 0.75rem 3.75rem;
	font: inherit;
	letter-spacing: 0.24rem;
	background-color: var(--clr-primary);
	border: 1px solid var(--clr-primary);
	border-radius: 2em;
	color: #fff;
	cursor: pointer;
	transition: 0.3s;

	&:active {
		background-color: #d3a995;
		border-color: #d3a995;
	}
}
button {
	padding: 16.5px 36px;
	box-shadow: 0px 4px 10px rgba(40, 35, 35, 0.35),
		0px -4px 10px rgba(255, 255, 255, 0.9);
}
</style>
