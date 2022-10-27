<template>
  <div class="calculator">
    <button @click="setCartItem(id, price, 'PLUS')">+</button>
    <input 
      type="text"
      readyonly
      :value="totalMount"
    />
    <button @click="setCartItem(id, price, 'MINUS')">-</button>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {
    id: Number,
    totalMount: Number,
    price: Number
  },
  methods: {
    setCartItem (id, price, type) {
      this.$store.dispatch('setTotal', {
        type,
        price
      });

      this.$store.dispatch('setCart', {
        id,
        price,
        type
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .calculator {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
      width: .2rem;
      height: .2rem;
      border: .01rem solid #999;
      border-radius: 50%;
      font-size: .14rem;
      line-height: .08rem;
      background-color: #fff;
    }
    input {
      width: .2rem;
      height: .2rem;
      font-size: .12rem;
      border: .01rem solid #999;
      text-align: center;
      margin: 0 .1rem 0;
    }
  }
</style>