<template>
  <div class="question-board">
    <div class="img-wrap" v-if="data.url">
      <img :src="data.url" />
    </div>
    <p class="question">题目：{{ data.question || '加载中...' }}</p>
  </div>
</template>

<script>
export default {
  name: 'QuestionBoard',
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
  .question-board {
    padding: .15rem;
    box-sizing: border-box;

    .img-wrap {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 2rem;
      }
    }

    .question {
      margin: .3rem 0;
      font-size: .16rem;
      line-height: .3rem;
    }
  }
</style>