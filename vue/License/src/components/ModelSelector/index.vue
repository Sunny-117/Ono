<template>
  <div class="selector-wrapper">
    <selector-item
      v-for="(item, index) of modelData"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>

import SelectorItem from './Item';

import modelData from '@/configs/model';

export default {
  name: 'ModelSelector',
  components: {
    SelectorItem
  },
  setup () {
    return {
      modelData
    }
  }
}
</script>

<style lang="scss" scoped>
  .selector-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: .15rem .1rem;
    box-sizing: border-box;
  }
</style>