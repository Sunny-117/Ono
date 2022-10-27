<template>
  <div id="app">
    <Stars
      :num="starNum"
      :size="size"
      @getStarNum="getStarNum"
    />
  </div>
</template>

<script>
import Stars from './libs/JSUI/components/Stars.vue'

export default {
  components: { Stars },
  name: 'App',
  data () {
    return {
      size: 30,
      starNum: 3
    }
  },
  methods: {
    getStarNum (number) {
      this.starNum = number;
      console.log(this.starNum);
    }
  }
}
</script>