<template>
  <header class="header">
    <h1><slot></slot><span v-if="headerTitle === '开始做题'">（{{ (questionPosition + 1) + '/' + data.length }}）</span></h1>
  </header>
</template>

<script>

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'MyHeader',
  setup () {
    const store = useStore(),
          state = store.state;
    
    return {
      questionPosition: computed(() => state.questionPosition),
      data: computed(() => state.data),
      headerTitle: computed(() => state.headerTitle)
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .44rem;
    font-size: .16rem;
    background-color: #07BCFF;
    color: #fff;
  }
</style>