<template>
	<div>
		<ul>
			<list-item
        v-for="(item, index) of todoData"
        :key="index"
        :item="item"
        @handleItem="handleItem"
			/>
		</ul>
	</div>
</template>

<script>
	import ListItem from './ListItem';

	export default {
		name: 'TdList',
		props: {
			todoData: Array
		},
		components: {
			ListItem
		},
		methods: {
			handleItem (...args) {
				this.$emit('dispatch', ...args);
			}
		}
	}
</script>