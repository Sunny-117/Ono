<template>
  <div class="score-wrapper">
    <h2>最终得分</h2>
    <h1>
      <span 
        :class="[
          'score',
          { 'nopass': scores < 90 },
          { 'pass': scores >= 90 }
        ]"
      >{{ scores }}</span> 
      / 
      <span class="total">100</span></h1>
  </div>
</template>

<script>
export default {
  name: 'Score',
  props: {
    scores: {
      type: Number,
      default () {
        return 0;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .score-wrapper {
    padding: .4rem 0;
    text-align: center;
    border-bottom: 1px solid #ddd;

    h2 {
      color: #337ab7;
      margin-bottom: .15rem;
    }

    h1 {
      font-size: .5rem;

      .pass {
        color: #5cb85c;
      }

      .nopass {
        color: #d9534f;
      }
    }
  }
</style>