<template>
  <div id="app">
    <div class="container">
      <div 
        class="data-scroll"
        :style="{ transform: `translate3d(0px, ${ - scrollTop }px, 0px)` }"
      >
        <div 
          class="data-item"
          ref="dataItem"
          v-for="(item, index) of dataOrigin"
          :key="index"
        >{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>

/**
 * 笔试题
 * 
 * 虚拟列表的模拟  向上向下无限滚动
 * 
 * [1,2,3,4,5,6,7,8,9]
 * 
 * list -> item -> div -> arr element -> 9
 * 
 * list -> div dom 不得超过10个  80px;
 * infinite scroll
 * 
 * reverse true -> 1 -> 9 -> 8 -> 7
 * 
 *         false -> 9 -> 1 -> 2 -> 3
 * 
 * 
 * div 2
 * div 3
 * div 4
 * div 5
 * div 1
 * 
 * interval -> 30毫秒滚动一次
 */
export default {
  name: 'App',
  mounted () {
    this.itemHeight = this.$refs.dataItem[0].offsetHeight;
    this.initScrollTop();
    this.setAutoScroll();
  },
  data () {
    return {
      dataOrigin: [1,2,3,4,5,6,7,8,9],
      reverse: true,
      itemHeight: 0,
      scrollTop: 0
    }
  },
  methods: {
    initScrollTop () {
      this.scrollTop = this.reverse ? this.itemHeight : 0;
    },
    setAutoScroll () {
      this.setItem();

      setInterval(() => {
        this.reverse ? this.scrollTop -- : this.scrollTop ++;

        if (this.scrollTop % this.itemHeight === 0) {
          this.initScrollTop();
          this.removeItem();
          this.setItem();
        }
      }, 30);
    },
    setItem () {
      this.reverse ? 
      this.dataOrigin.unshift(this.dataOrigin[this.dataOrigin.length - 1]) :
      this.dataOrigin.push(this.dataOrigin[0]);
    },
    removeItem () {
      this.dataOrigin = this.dataOrigin.filter((el, index) => (
        this.reverse ? index !== this.dataOrigin.length - 1 : index !== 0
      ));
    }
  }
}

/**
 * 
 * mdn   方法的polyfill  实现    数组扩展方法的重写   函数静态方法 -> 技术人员的基础知识 
 */
</script>

<style>
  html,
  body {
    height: 100%;
    margin: 0;
    overflow: hidden;
  }

  .data-item {
    height: 80px;
    border-bottom: 1px solid #ddd;
    text-align: center;
    line-height: 80px;
    font-size: 30px; 
  }
</style>


