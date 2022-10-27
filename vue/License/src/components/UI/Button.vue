<template>
  <button 
    :class="['my-btn', `btn-${btnStyle}`]"
    @click="btnClick"
  ><slot></slot></button>
</template>

<script>

export default {
  name: 'MyBtn',
  props: {
    btnStyle: String
  },
  setup (props, ctx) {
    const btnClick = (e) => {
      ctx.emit('btnClick');
    }

    return {
      btnClick
    }
  }
}
</script>

<style lang="scss" scoped>
  .my-btn {
    border: none;
    outline: none;
    width: 100%;
    height: .4rem;
    font-size: .16rem;
    border-radius: .05rem;

    &.btn-primary {
      color: #fff;
      background-color: #337ab7;
      border-color: #2e6da4;

      &:hover {
        color: #fff;
        background-color: #286090;
        border-color: #204d74;
      }
    }

    &.btn-success {
      color: #fff;
      background-color: #5cb85c;
      border-color: #4cae4c;

      &:hover {
        color: #fff;
        background-color: #449d44;
        border-color: #398439;
      }
    }
  }
</style>