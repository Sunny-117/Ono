<template>
  <div class="container">
    <mi-header
      :cartIconShow="true"
    >小米手机</mi-header>
    <PhoneList />
  </div>
</template>

<script>

import MiHeader from '@/components/Header';
import PhoneList from '@/components/PhoneList';

export default {
  name: 'Home',
  components: {
    MiHeader,
    PhoneList
  },
  mounted () {
    this.$store.dispatch('setData');
  }
}
</script>
