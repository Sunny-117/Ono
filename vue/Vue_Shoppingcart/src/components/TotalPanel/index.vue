<template>
  <div class="total-panel">
    <span class="total-price">
      总价：<span class="price">￥{{ totalPrice }}</span>
    </span>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import { setStorage } from '@/libs/utils';

export default {
  name: 'TotalPanel',
  computed: {
    ...mapState(['totalPrice', 'totalMount', 'cartData'])
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
  .total-panel {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .44rem;
    padding-right: .15rem;
    box-sizing: border-box;
    background-color: #fff;
    border-top: 1px solid #ddd;

    .total-price {
      float: right;
      line-height: .44rem;
      font-size: .18rem;
      color: #f50000;
    }
  }
</style>