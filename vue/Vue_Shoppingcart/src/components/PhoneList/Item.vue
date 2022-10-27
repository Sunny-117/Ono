<template>
  <div class="list-item">
    <div class="img-wrap">
      <img :src="item.img" :alt="item.phone_name" />
    </div>
    <div class="info-wrap">
      <h1 class="phone-name">{{ item.phone_name }}</h1>
      <p class="slogan">{{ item.slogan }}</p>
      <p class="price">￥{{ item.default_price }}</p>
      <p class="button">
        <button @click="addToCart(item, 'PLUS')">加入购物车</button>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ListItem',
  props: {
    item: Object
  },
  methods: {
    addToCart (data, type) {
      this.$store.dispatch('setTotal', {
        type,
        price: Number(data.default_price)
      });

      this.$store.dispatch('setCart', {
        type, 
        id: Number(data.id),
        img: data.img,
        name: data.phone_name,
        price: Number(data.default_price),
        slogan: data.slogan
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-item {
    position: relative;
    display: flex;
    flex-direction: row;
    height: 1.2rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;

    .img-wrap {
      width: 1.2rem;
      height: 1.2rem;
      border-right: 1px solid #ddd;
    }

    .info-wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1.2rem;
      padding: .1rem .1rem .1rem 1.3rem;
      box-sizing: border-box;

      .phone-name {
        color: #000;
        font-size: .16rem;
      }

      .slogan {
        margin-top: .15rem;
        color: #999;
        font-size: .12rem;
        overflow:hidden; 
        text-overflow:ellipsis;
        white-space:nowrap;
      }

      .price {
        margin-top: .15rem;
        color: #FF6704;
        font-size: .14rem;
      }

      .button {
        margin-top: .05rem;

        button {
          float: right;
          width: .8rem;
          height: .2rem;
          font-size: .12rem;
          border: 1px solid #FF6704;
          color: #FF6704;
          border-radius: .02rem;
          background-color: #fff;
        }
      }
    }
  }
</style>