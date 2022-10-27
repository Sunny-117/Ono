<template>
  <router-link
    to="/cart"
    class="cart-icon"
    v-if="cartIconShow"
  >
    <span class="cart">
      购物车({{ totalMount }})
    </span>
  </router-link>
</template>

<script>

import { mapState } from 'vuex';

import { setStorage } from '@/libs/utils';

export default {
  name: 'CartIcon',
  props: {
    cartIconShow: Boolean
  },
  computed: {
    ...mapState(['totalMount', 'totalPrice', 'cartData'])
  },
  updated () {
    setStorage({
      totalMount: this.totalMount,
      totalPrice: this.totalPrice,
      cartData: this.cartData
    });
  }
}
</script>

<style lang="scss" scoped>
  .cart-icon {
    color: #fff;

    .cart {
      position: absolute;
      right: .15rem;
      top: .15rem;
      font-size: .14rem;
    }
  }
</style>