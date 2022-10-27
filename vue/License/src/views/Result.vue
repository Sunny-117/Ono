<template>
  <div class="container">
    <score :scores="scores" />
    <res-title title="错题解析" />
    <wrong-list :wrongData="wrongData" />
  </div>
</template>

<script>

import { useStore } from 'vuex';
import { computeTotalScore, formatWrongAnswersData } from '@/libs/utils';

import Score from '@/components/Result/Score';
import ResTitle from '@/components/Result/Title';
import WrongList from '@/components/Result/WrongList';

export default {
  name: 'ResultPage',
  components: {
    Score,
    ResTitle,
    WrongList
  },
  setup () {
    const store = useStore(),
          state = store.state;
    
    const data = state.data,
          myAnswers = state.myAnswers;
    
    return {
      scores: computeTotalScore(myAnswers),
      wrongData: formatWrongAnswersData(data, myAnswers)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>