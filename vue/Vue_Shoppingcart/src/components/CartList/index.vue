<template>
  <div class="cart-list">
    <ListItem
      v-for="(item, index) of cartData"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>

import ListItem from './Item';

import { mapState } from 'vuex';

export default {
  name: 'CartList',
  components: {
    ListItem
  },
  computed: {
    ...mapState(['cartData'])
  }
}
</script>

<style lang="scss" scoped>
  .cart-list {
    padding-bottom: .44rem;
  }
</style>