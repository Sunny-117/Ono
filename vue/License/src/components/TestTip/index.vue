<template>
  <div class="test-tip">
    你正在进行<span>科目{{ subjectId }}</span>-<span>{{ modelType }}驾照</span>的测试
  </div>
</template>

<script>

import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'TestTip',
  props: {
    subjectId: Number,
    modelType: String
  }
}
</script>

<style lang="scss" scoped>
  .test-tip {
    position: fixed;
    top: .44rem;
    left: 0;
    width: 100%;
    height: .34rem;
    font-size: .14rem;
    text-align: center;
    line-height: .34rem;
    color: #8a6d3b;
    background-color: #fcf8e3;
    border: 1px solid #faebcc;

    span {
      font-weight: bold;
    }
  }
</style>