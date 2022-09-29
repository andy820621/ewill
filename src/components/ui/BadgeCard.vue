<template>
	<div :style="{ '--color': color, '--bottom': bottom }">
		<BaseCard>
			<BaseBadge :green="green">
				<slot name="badge"></slot>
			</BaseBadge>
			<div class="number">
				<slot name="number"></slot>
			</div>
			<div class="title">
				<slot name="title"></slot>
			</div>
		</BaseCard>
	</div>
</template>

<script setup>
import BaseBadge from "@/components/ui/BaseBadge.vue";
import { computed } from "@vue/reactivity";

const props = defineProps({
	green: {
		type: Boolean,
		required: false,
		default: false,
	},
});

const color = computed(() => (props.green ? "#B3B960" : "#a0bcc8"));
const bottom = computed(() => (props.green ? "10px" : "16px"));
</script>

<style lang="scss" scoped>
.card {
	border: 0;
	background-color: #fff;
	width: 178px;
	height: 112px;
	position: relative;
	color: var(--color);
	box-shadow: 0 8px 0 #edeef0;
	margin: 0 auto;
	.badge {
		top: calc(-1rem - 20px);
	}
	.number {
		position: absolute;
		top: 18px;
		right: 0.5rem;
		border: 1px solid var(--color);
		border-radius: 2rem;
		padding: 3px 10px;
		font-size: 12px;
	}
	.title {
		position: absolute;
		text-align: center;
		height: 44px;
		line-height: 44px;
		bottom: var(--bottom);
		left: 50%;
		transform: translateX(-50%);
		font-size: 18px;
		font-weight: 700;
		white-space: nowrap;
	}
}
</style>
