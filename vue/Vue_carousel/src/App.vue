<template>
  <div id="app">
    <div class="container">
      <carousel
        :autoplay="true"
        :duration="3000"
        :initial="0"
        :hasDot="true"
        :hasDirector="true"
        @Slide="onSlide"
      >
        <car-item
          v-for="(item, index) of carData"
          :key="index"
        >
          <div>
            <img :src="require(`./assets/img/${item.img_name}`)" alt="" />
          </div>
        </car-item>
      </carousel>
    </div>
  </div>
</template>

<script>

import carData from '@/data/carousel';

export default {
  name: 'App',
  setup () {

    const onSlide = (index) => {
      console.log(index);
    }

    return {
      carData,
      onSlide
    }
  }
}
</script>

<style lang="scss">
  .container {
    width: 520px;
    height: 280px;
    margin: 150px auto;

    img {
      width: 100%;
    }
  }
</style>