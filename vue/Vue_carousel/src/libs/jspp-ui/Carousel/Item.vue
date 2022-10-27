<template>
  <transition>
    <div class="car-item" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>

import { getCurrentInstance, reactive, toRefs, watch } from 'vue';

export default {
  name: 'CarItem',
  setup () {
    const instance = getCurrentInstance();
    
    const state = reactive({
      currentIndex: instance.parent.ctx.currentIndex,
      selfIndex: instance.vnode.key
    })

    watch(() => {
      return instance.parent.ctx.currentIndex;
    }, (value) => {
      state.currentIndex = value;
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
  .car-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //transition: all .5s linear;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all .5s linear;
  } 

  .v-enter-active {
    transform: translateX(100%);
  }

  .v-enter-to {
    transform: translateX(0);
  }

  .v-leave-active {
    transform: translateX(0);
  }

  .v-leave-to {
    transform: translateX(-100%);
  }
</style>