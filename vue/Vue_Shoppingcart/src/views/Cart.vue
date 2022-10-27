<template>
  <div class="container">
    <mi-header
      :backIconShow="true"
    >购物车</mi-header>
    <CartList />
    <TotalPanel />
  </div>
</template>

<script>

import MiHeader from '@/components/Header';
import CartList from '@/components/CartList';
import TotalPanel from '@/components/TotalPanel';

export default {
  name: 'Cart',
  components: {
    MiHeader,
    CartList,
    TotalPanel
  },
  mounted () {
    this.$store.dispatch('setData');
  }
}
</script>
