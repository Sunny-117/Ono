<template>
  <router-link
    to="/"
    class="back-icon"
    v-if="backIconShow"
  >
    返回
  </router-link>
</template>

<script>
export default {
  name: 'BackIcon',
  props: {
    backIconShow: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .back-icon {
    position: absolute;
    top: .15rem;
    left: .15rem;
    font-size: .14rem;
    color: #fff;
  }
</style>