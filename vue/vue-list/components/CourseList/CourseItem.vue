<template>
	<div class="course-item">
		<div class="cover">
			<a 
			  :href="'https://ke.qq.com/course/' + item.id"
        target="_blank"
        class="course-lk"
			>
			  <img 
				  :src="item.img" 
				  :alt="item.course_name"
				  class="cover-img"
				/>
			</a>
		</div>
		<h1 class="course-tt">
			<a 
			  :href="'https://ke.qq.com/course/' + item.id"
        target="_blank"
        class="course-lk"
			>
			  {{item.course_name}}
		  </a>
		</h1>
		<div 
		  :class="['price', { 'free': item.price === '0' }]">

		  {{ item.price === '0' ? '免费' : `￥${item.price}.00` }}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CourseItem',
		props: {
			item: Object
		}
	}
</script>

<style lang="scss" scoped>
	.course-item {
		float: left;
		width: 236px;
		height: 221px;
		padding: 7px 7px 10px;
		margin-left: 9px;
		border: 1px solid transparent;
		box-sizing: border-box;

		&:hover {
			border-color: #ddd;
		}

		.course-tt {
			overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    height: 40px;
	    font-size: 14px;
	    margin-bottom: 8px;
	    position: relative;
		}

		.price {
			height: 24px;
			line-height: 24px;
			color: #f40;

			&.free {
				color: #5fb41b;
				font-size: 14px;
			}
		}
	}
</style>






