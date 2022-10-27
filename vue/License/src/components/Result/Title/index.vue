<template>
  <div class="title-wrapper">
    <h1>- {{ title }} -</h1>
  </div>
</template>

<script>
export default {
  name: 'ResTitle',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
  .title-wrapper {
    height: .44rem;
    font-size: .16rem;
    line-height: .44rem;
    border-bottom: .01rem solid #ddd;
    text-align: center;
  } 
</style>