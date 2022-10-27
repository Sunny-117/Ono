<template>
	<div class="container">
		<nav-bar 
		  :fieldData="fieldData"
		  :curIdx="curIdx"
		  :selectNav="selectNav"
		/>
		<course-list :courseData="curCourseData" />
	</div>

</template>

<script>

	import IndexModel from '@/models/Index';
	import { DEFAULT_NAV_ITEM } from '@/config/config';
	import { filterData } from '@/utils/tools';

	const indexModel = new IndexModel();

	import NavBar from '@/components/NavBar';
	import CourseList from '@/components/CourseList';
	
	export default {
		name: 'IndexPage',
		components: {
      NavBar,
      CourseList
		},
		data () {
      return {
      	courseData: [],
      	curCourseData: [],
      	fieldData: [],
      	curIdx: 0
      }
		},
		mounted () {
			this.getDatas();
		},
		methods: {
			async getDatas () {
				const courseData = await indexModel.getCourseData(),
				      fieldData = await indexModel.getFieldData();

				this.courseData = courseData;
				this.curCourseData = courseData;
				this.fieldData = DEFAULT_NAV_ITEM.concat(fieldData);
			},
			selectNav (index, field) {
				this.curIdx = index;
				this.curCourseData = filterData(this.courseData, field);
			}
		}
	}

</script>








