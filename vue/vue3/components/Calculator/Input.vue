<template>
	<input
	  type="text" 
	  value="0"
	  @input="setNumber"
	/>
</template>

<script>
	export default {
		name: 'CalInput',
		props: {
			field: String
		},
		methods: {
			setNumber (e) {
				const val = Number(e.target.value);

				this.$emit('dispatch', 'SET_NUMBER', this.field, val);
			}
		}
	}
</script>