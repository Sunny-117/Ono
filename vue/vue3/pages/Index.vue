<template>
	<!-- <div>
		<counter />
		<hr />
		<calculator />
		<hr />
		<todo-list />
	</div> -->
	<div>
		<el-select v-model="value" placeholder="请选择">
	    <el-option
	      v-for="item in options"
	      :key="item.value"
	      :label="item.label"
	      :value="item.value">
	    </el-option>
	  </el-select>

	  <el-select v-model="value2" placeholder="请选择">
	    <el-option
	      v-for="item in options2"
	      :key="item.value"
	      :label="item.label"
	      :value="item.value">
	    </el-option>
	  </el-select>
	</div>
</template>

<script>
  
  // import Counter from '@/components/Counter';
  // import Calculator from '@/components/Calculator';
  // import TodoList from '@/components/TodoList';

	export default {
		name: 'IndexPage',
		// components: {
		// 	Counter,
		// 	Calculator,
		// 	TodoList
		// }
		data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value2: ''
      }
    }
	}
</script>

<!-- todolist

title

input 

list
  item -> 完成与否 + 删除 -->