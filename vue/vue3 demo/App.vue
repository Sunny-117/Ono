<template>
  <div class="wrapper">
    <!-- <Magnifier
      :link="link"
      :blank="blank"
      :imgUrl="imgUrl"
      :imgAlt="imgAlt"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
    /> -->

    <!-- <Stars
      :num="num"
      :size="size"
      @getStarNum="getStarNum"
    /> -->
    <Modal
      :show="true"
      :width="500"
      :borderRadius="5"
      headerColor="orange"
      headerText="This is a SUPER MODAL"
      headerTextColor="#333"
      contentText="This is a SUPER MODAL.This is a SUPER MODAL.This is a SUPER MODAL.This is a SUPER MODAL."
      contentTextColor="#333"
      position="top"
      :btnGroupShow="true"
      confirmText="Yes"
      cancelText="No"
      @confirm="modalConfirm"
      @close="modalClose"
    />
  </div>
</template>

<script>

import { reactive, toRefs } from 'vue';

// https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h821%2F20180216%2F6687-fyrpeif0540896.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617781028&t=b0e8cc7992bec442ec6fac5b2f1df79b
export default {
  name: 'App',
  setup () {
    // const state = reactive({
    //   num: 2,
    //   size: 50
    // })
    // const state = reactive({
    //   imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h821%2F20180216%2F6687-fyrpeif0540896.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617781028&t=b0e8cc7992bec442ec6fac5b2f1df79b',
    //   imgAlt: '裴秀智',
    //   blank: true,
    //   link: 'https://www.baidu.com',
    //   imgWidth: 375,
    //   imgHeight: 481,
    //   magWidth: 150,
    //   magHeight: 150
    // });

    // return {
    //   ...toRefs(state)
    // }

    // const getStarNum = (num) => {
    //   console.log(num);
    // }

    const modalConfirm = (formData) => {
      console.log('Modal Confirm', formData);
    }

    const modalClose = () => {
      console.log('Modal Close');
    }

    return {
      modalConfirm,
      modalClose
      // ...toRefs(state),
      // getStarNum
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
