<template>
  <my-tab
    :tabData="tabData"
    :initial-index="initialIndex"
  ></my-tab>
</template>

<script>
  
  import MyTab from './components/MyTab';

  export default {
    name: 'App',
    components: {
      MyTab
    },
    data () {
      return {
        tabData: [
          {
            id: 1,
            title: '选项1',
            content: '内容1'
          },
          {
            id: 2,
            title: '选项2',
            content: '内容2'
          },
          {
            id: 3,
            title: '选项3',
            content: '内容3'
          },
          {
            id: 4,
            title: '选项4',
            content: '内容4'
          },
        ],
        initialIndex: 2
      }
    }
  }
</script>
