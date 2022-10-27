<template>
  <div class="my-select">
    <div 
      class="result"
      @click="openOptions"
    >{{ data[curIdx].text }}</div>
    <div class="options" v-show="optionsShow">
      <div
        class="option"
        v-for="(item, index) of data"
        :key="item.id"
        @click="setOption(index, item)"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>

import { reactive, toRefs } from 'vue';

export default {
  name: 'MySelect',
  props: {
    data: Array,
    currentIndex: {
      type: Number,
      default: 0
    },
    callback: Function
  },
  setup (props) {
    const state = reactive({
      curIdx: props.currentIndex,
      optionsShow: false
    });

    const setOption = (index, item) => {
      state.curIdx = index;
      state.optionsShow = false;
      props.callback(index, item);
    }

    const openOptions = () => {
      state.optionsShow = true;
    }

    return {
      ...toRefs(state),
      setOption,
      openOptions
    }
  }
  // <my-select
  //     :data="data"
  //     :currentIndex="curIdx"
  //     :callback="setOption"
  //   />
}
</script>

<style lang="scss">
  .my-select {
    position: relative;
    width: 200px;
    height: 34px;
    border: 1px solid #000;
    cursor: pointer;
    
    .result {
      width: 100%;
      height: 100%;
      line-height: 34px;
      text-align: center;
    }

    .options {
      position: absolute;
      top: 35px;
      left: -1px;
      width: 200px;
      background-color: #fff;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
      .option {
        height: 34px;
        border-bottom: 1px solid #000;
        line-height: 34px;
        text-align: center;
      }
    }
  }
</style>