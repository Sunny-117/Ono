<template>
  <div class="container">
    <test-tip
      :subjectId="subjectId"
      :modelType="modelType"
    />
    <div class="question-wrapper">
      <question-board
        :data="currentQuestion"
      />
      <selector 
        :data="currentQuestion"
      />
    </div>
  </div>
</template>

<script>


import { useStore } from 'vuex';
import { computed, onMounted, toRefs } from 'vue';

import getData from '@/services';

import TestTip from '@/components/TestTip';
import QuestionBoard from '@/components/Test/Question';
import Selector from '@/components/Test/Selector';

export default {
  name: 'TestPage',
  components: {
    TestTip,
    QuestionBoard,
    Selector
  },
  setup () {
    const store = useStore(),
          state = store.state;
    
    onMounted(() => {
      getData(store);
    })
    
    return {
      subjectId: computed(() => state.subjectId),
      modelType: computed(() => state.modelType),
      currentQuestion: computed(() => state.currentQuestion)
    }
  }
}
</script>

<style lang="scss" scoped>
  .question-wrapper {
    margin-top: .37rem;
  }
</style>