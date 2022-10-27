<template>
	<div class="nav-item">
		<a 
		  href="javascript:;" 
		  :class="['nav-lk', { 'nav-current': index === curIdx }]"
      @click="selectNav(index, item.field)"
		>
		  {{item.field_name}}
	  </a>
	</div>
</template>

<script>
	
	export default {
		name: 'NavItem',
		props: {
			item: Object,
			index: Number,
			curIdx: Number,
			selectNav: Function
		}
	}

</script>

<style lang="scss" scoped>
	.nav-item {
		float: left;
		width:  150px;
		height: 44px;
		text-align: center;
		line-height: 44px;

		.nav-lk {
			font-size: 14px;

			&.nav-current {
				color: #167ed9;
			}
		}
	}
</style>