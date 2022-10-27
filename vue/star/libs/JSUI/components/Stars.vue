<template>
  <div class="ui-stars">
    <span
      v-for="number in 5"
      :key="number"
      :class="[
        'iconfont icon-star',
        number <= starNum ? 'active' : ''
      ]"
      :style="{ fontSize: size + 'px' }"
      @click="setStarNum(number)"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    num: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 16
    }
  },
  data () {
    return {
      starNum: this.num
    }
  },
  methods: {
    setStarNum (number) {
      this.starNum = number;
      this.$emit('getStarNum', this.starNum);
    }
  }
}
</script>

<style lang="scss" scoped>
  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_2416240_16adww0qe8ri.eot?t=1615530777645'); /* IE9 */
    src: url('//at.alicdn.com/t/font_2416240_16adww0qe8ri.eot?t=1615530777645#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKoAAsAAAAABlAAAAJdAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApcdAE2AiQDCAsGAAQgBYRtBy4bmAXIHpIkRQpIUhQlOA0GABF8vx+/Pe/dbyJRtX3HtJFo5lVsumVLhGIZQiORLNNs/9c0BRRqc3lv9qCtrBqRKuqD/APOZfT8hCa9aWBjKuTmVjehm0JxkBeH0yZQIPOBcpl7UBdQFwdSQHtjm6yEMm4Yu8AlnCdQqpOmsrF/OoG2xJoWiPOBZ0E755AkFi4WCmvWJvEUChRn96qfgSfh9+OXQbTJFOSsrL1zey5sfmdH1e6u7jrlI8BJQJsLkGMcSMSh2sCOmmC4mtJAXS/YV3rw3eq/rxJ7lQv211mp5aAdMu6J6bJuNZzBbXXVAgyOehTRcmM2u7/ffGjy8Kzh8OT21dDR6eOb1iPzmxczn7r+9ud/Dz71qFHfjffF17vRP73L5m+Xbe3astek5oNf3q2wfpa/rS2oIHhZvvl9tmrhd3FZAl/T1kNZ0s8EivdmDP4Ks2dD0tmWMksqs7Y103K2slKl+A9bav2OlTTcQiQUaxhhKtKRQq5YPzJhx6FAmQkoVGwZSo052FymDquJVIJR1wBCtSfIVHoPuWoLZML+QIFG/1CoOmpQ6kjU7VlmMILuOpMl5KJ9hYGTpcpRSzdKH5F3FlucZYf4GXEZuLFv9IrhA0qJ51hQnnsDEYWKswT3wWUUxxnmnIXkiOGL5EPTVHVvMpwsga51jFgEcSHbFRRwZFLKby+6pc+PEM+ZmIVb6mqUM4SVgt5Rn6HXA3kgSHvV3cs1pXOeASEUpLBMAu2DUSQWy6C8flSIOITBH+HLDZl2M9VXYKwvSr5uB5SypFnY+bl0QSwGAAA=') format('woff2'),
    url('//at.alicdn.com/t/font_2416240_16adww0qe8ri.woff?t=1615530777645') format('woff'),
    url('//at.alicdn.com/t/font_2416240_16adww0qe8ri.ttf?t=1615530777645') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_2416240_16adww0qe8ri.svg?t=1615530777645#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #999;

    &.icon-star:before {
      content: "\e842";
    }

    &.active {
      color: #FCC33F;
    }
  }
</style>