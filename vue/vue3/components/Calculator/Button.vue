<template>
	<button
    :method="method"
    :class="{ current: method === curMethod }"
    @click="changeMethod"
	>
		{{ innerText }}
	</button>
</template>

<script>
	export default {
		name: 'CalButton',
		props: {
			innerText: String,
			method: String,
			curMethod: String
		},
		methods: {
			changeMethod () {
				this.$emit('dispatch', 'CHANGE_METHOD', this.method);
			}
		}
	}
</script>

<style>
	.current {
		background-color: orange;
		color: #fff;
	}
</style>