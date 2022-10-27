<template>
	<li>
		<input 
		  type="checkbox"
		  :checked="item.completed ? 'checked' : ''" 
		  @click="handleItem('COMPLETED', item.id)"
		/>
		<span
      :class="{ completed: item.completed }"
		>
	    {{ item.text }}
	  </span>
	  <button
	    @click="handleItem('REMOVE', item.id)"
	  >
	    删除
	  </button>
	</li>
</template>

<script>
	export default {
		name: 'ListItem',
		props: {
			item: Object
		},
		methods: {
			handleItem (...args) {
				this.$emit('handleItem', ...args);
			}
		}
	}
</script>

<style>
	.completed {
		text-decoration: line-through;
	}
</style>