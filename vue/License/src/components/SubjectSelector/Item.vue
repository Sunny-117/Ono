<template>
  <div 
    class="selector-item"
  >
    <div 
      :class="[
        'inner',
        { 'selected': item.id === subjectId },
        { 'subject1': item.id === 1 },
        { 'subject2': item.id === 4 }
      ]"
      @click="setSubjectId(item.id)"
    >
      {{ item.subject }}
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
    
    const setSubjectId = (id) => {
      store.commit('setSubjectId', id);
    }
    
    return {
      subjectId: computed(() => state.subjectId),
      setSubjectId
    }
  }
}
</script>

<style lang="scss" scoped>
  .selector-item {
    width:50%;
    color: #fff;
    font-size: .16rem;
    padding: .15rem;
    box-sizing: border-box;

    .inner {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      border-radius: .05rem;
      padding: .5rem 0;
      transition: box-shadow .3s;

      &.subject1 {
        background-color: #f0ad4e;
      }

      &.subject2 {
        background-color: #5cb85c;
      }

      &.selected {
        box-shadow: .03rem .08rem .1rem #666;
      }
    }
  }
</style>