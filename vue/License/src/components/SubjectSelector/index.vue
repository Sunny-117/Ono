<template>
  <div class="selector-wrapper">
    <selector-item
      v-for="(item, index) of subjectData"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>

import SelectorItem from './Item';
import subjectData from '@/configs/subject';

export default {
  name: 'SubjectSelector',
  components: {
    SelectorItem
  },
  setup () {
    return {
      subjectData
    }
  }
}
</script>

<style lang="scss" scoped>
  .selector-wrapper {
    display: flex;
    flex-direction: row;
    padding: .15rem .1rem;
    box-sizing: border-box;
  }
</style>