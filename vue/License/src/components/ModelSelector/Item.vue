<template>
    <div 
    class="selector-item"
  >
    <div 
      :class="[
        'inner',
        { 'selected': item.type === modelType },
      ]"
      @click="setModelType(item.type)"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'SelectorItem',
  props: {
    item: Object
  },
  setup () {
    const store = useStore(),
          state = store.state;
    
    const setModelType = (type) => {
      store.commit('setModelType', type);
    }
    
    return {
      modelType: computed(() => state.modelType),
      setModelType
    }
  }
}
</script>

<style lang="scss" scoped>
  .selector-item {
    width: 50%;
    padding: .15rem;
    box-sizing: border-box;

    .inner {
      display: flex;
      justify-content: center;
      align-items: center;
      border: .03rem solid #31b0d5;
      border-radius: .08rem;
      color: #31b0d5;
      font-size: .16rem;
      padding: .2rem;
      transition: all .3s;

      &.selected {
        background-color: #31b0d5;
        color: #fff;
      }
    }
  }
</style>