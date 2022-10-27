<template>
  <div class="list-item">
      <img :src="item.imgUrl" />
      <h1>题目：{{ item.question }}</h1>
      <h1 class="answer">答案：{{ item.rightItem }}</h1>
      <h1 class="explain">解析：{{ item.explains }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped>
  .list-item {
    display: flex;
    flex-direction: column;
    padding: .1rem 0;
    border-bottom: 1px solid #ddd;
    font-size: .14rem;

    h1 {
      line-height: .25rem;

      &.answer {
        color: #5cb85c;
      }

      &.explain {
        color: #d9534f;
        font-weight: bold;
      }
    }

    img {
      margin-bottom: .15rem;
    }
  }
</style>