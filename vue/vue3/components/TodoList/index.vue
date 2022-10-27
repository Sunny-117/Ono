<template>
	<div>
		<td-title :title="title" />
		<td-form @dispatch="dispatch" />
		<td-list 
		  :todoData="todoData" 
		  @dispatch="dispatch"
		/>
	</div>
</template>

<script>
	import TdTitle from './Title';
	import TdForm from './Form';
	import TdList from './List';

	import dispatch from '@/dispatchers/todoList';

	export default {
		name: 'TodoList',
		components: {
			TdTitle,
			TdForm,
			TdList
		},
		data () {
			return {
				title: 'Todo List',
				todoData: []
			}
		},
		methods: {
			dispatch (...args) {
				dispatch(this)(...args);
			}
		}
	}
</script>