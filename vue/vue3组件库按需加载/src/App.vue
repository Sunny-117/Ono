<template>
  <div>
    <my-select
      :data="data"
      :currentIndex="curIdx"
      :callback="setOption"
    />
    <my-link
      href="http://www.baidu.com"
      target="_blank"
    >百度</my-link>
    <my-link
      href="http://www.taobao.com"
      type="success"
    >淘宝</my-link>
    <my-link
      href="http://www.tmall.com"
      type="danger"
      target="_blank"
    >天猫</my-link>
    <my-link
      href="http://www.jd.com"
      type="warning"
    >京东</my-link>
    <my-link
      href="http://www.bilibili.com"
      type="primary"
      target="_blank"
    >bilibili</my-link>
  </div>
</template>

<script>

import { ref } from 'vue';
// import MySelect from '../modules/my-ui/Select';
// import MyLink from '../modules/my-ui/Link';

export default {
  name: 'App',
  components: {
    // MySelect,
    // MyLink
  },
  setup () {
    /**
     * select result innerText option option
     * option value innerText
     */
    const curIdx = ref(1);

    const data = [
      {
        id: 1,
        value: 'orange',
        text: '橙子'
      },
      {
        id: 2,
        value: 'apple',
        text: '苹果'
      },
      {
        id: 3,
        value: 'pear',
        text: '梨'
      }
    ];

    const setOption = (index, item) => {
      console.log(index, item);
    }

    return {
      data,
      curIdx,
      setOption
    }
  }
}
</script>


