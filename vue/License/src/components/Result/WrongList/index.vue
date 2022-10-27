<template>
  <div class="list-wrapper">
    <list-item
      v-for="(item, index) of wrongData"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>

import ListItem from './Item';

export default {
  name: 'WrongList',
  props: {
    wrongData: Array
  },
  components: {
    ListItem
  }
}
</script>

<style lang="scss" scoped>
  .list-wrapper {
    padding: .15rem;
    box-sizing: border-box;
  }
</style>