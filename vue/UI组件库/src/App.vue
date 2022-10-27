<template>
  <div>
    <my-button
      @click="clickTest('Default')"
    >Default</my-button>
    <my-button
      @click="clickTest('Default')"
      type="default"
    >Default</my-button>
    <my-button
      @click="clickTest('Primary')"
      type="primary"
    >Primary</my-button>
    <my-button
      @click="clickTest('Success')"
      type="success"
    >Success</my-button>
    <my-button
      @click="clickTest('Danger')"
      type="danger"
    >Danger</my-button>
    <my-button
      @click="clickTest('Warning')"
      type="warning"
    >Warning</my-button>
    <my-alert
      @confirm="confirmAlert"
      ref="myAlert"
      type="warning"
    >
      <template #header>
        This is title for ALERT
      </template>
      <template #content>
        This is content for ALERT
      </template>
      <template #btnText>Confirm</template>
    </my-alert>
  </div>
  <my-button 
    type="success"
    @click="openAlert"
  >OPEN ALERT</my-button>

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
  },
  methods: {
    clickTest (type) {
      console.log(type);
    },
    confirmAlert () {
      console.log('Close Alert');
    },
    openAlert () {
      this.$refs.myAlert.operateAlert(true);
    }
  }
}
</script>

<style>

</style>
