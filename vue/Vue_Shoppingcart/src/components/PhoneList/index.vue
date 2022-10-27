<template>
  <div class="phone-list">
    <ListItem
      v-for="(item, index) of phoneData"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>

import ListItem from './Item';

import { mapState } from 'vuex';

export default {
  name: 'PhoneList',
  components: {
    ListItem
  },
  computed: {
    ...mapState(['phoneData'])
  }
}
</script>