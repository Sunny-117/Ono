<template>
  <div class="list-item">
    <div class="img-wrap">
      <img :src="item.img" :alt="item.name" />
    </div>
    <div class="info-wrap">
      <h1 class="phone-name">{{ item.name }}</h1>
      <p class="slogan">{{ item.slogan }}</p>
      <p class="price">￥{{ item.price }}</p>
      <p class="button">
        <Calculator
          :id="Number(item.id)"
          :totalMount="item.totalMount"
          :price="item.price"
        />
      </p>
    </div>
  </div>
</template>

<script>

import Calculator from './Calculator';

export default {
  name: 'ListItem',
  props: {
    item: Object
  },
  components: {
    Calculator
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