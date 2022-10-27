<template>
  <div class="summary-wrapper">
    <div class="inner">
      <header class="header">
        <h1>{{ field }}运势总结</h1>
      </header>
      <div class="content">{{ content || '加载中...' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  props: {
    field: String,
    content: String
  }
}
</script>

<style lang="scss" scoped>
  .summary-wrapper {
    padding: 0 .1rem .1rem;
    box-sizing: border-box;

    .inner {
      border-radius: .05rem;
      border: 1px solid #ddd;
      overflow: hidden;

      .header {
        height: .35rem;
        background-color: #C71585;
        color: #fff;
        font-size: .16rem;
        text-align: center;
        line-height: .35rem;
      }

      .content {
        background-color: #fff;
        font-size: .14rem;
        padding: .1rem;
        text-indent: 2em;
        line-height: .2rem;
      }
    }
  }
</style>