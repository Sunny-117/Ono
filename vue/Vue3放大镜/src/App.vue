<template>
  <div class="wrapper">
    <input type="text" v-model="inputData[0].inputValue" />
    <Magnifier
      :link="link"
      :blank="blank"
      :imgUrl="imgUrl"
      :imgAlt="imgAlt"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
    />
  </div>
</template>

<script>

import { reactive, toRefs } from 'vue';

// https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h821%2F20180216%2F6687-fyrpeif0540896.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617781028&t=b0e8cc7992bec442ec6fac5b2f1df79b
export default {
  name: 'App',
  data () {
    return {
      inputData: [
        {
          inputValue: 123
        }
      ]
    }
  },
  setup () {
    const state = reactive({
      imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h821%2F20180216%2F6687-fyrpeif0540896.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617781028&t=b0e8cc7992bec442ec6fac5b2f1df79b',
      imgAlt: '裴秀智',
      blank: true,
      link: 'https://www.baidu.com',
      imgWidth: 375,
      imgHeight: 481,
      magWidth: 150,
      magHeight: 150
    });

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss">
  .wrapper {
    width: 375px; // 481
    margin: 100px auto;
  }
</style>
