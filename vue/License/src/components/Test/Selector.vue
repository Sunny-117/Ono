<template>
  <div>
    <div class="selector-wrapper" v-if="data.item3 !== ''">
      <div 
        :class="['selector-item', { 'current': curIdx === 0 }]"
        @click="selectItem(data.id, '1', data.answer, 0)"
      >
        {{ data.item1 || '加载中...' }}
      </div>
      <div 
        :class="['selector-item', { 'current': curIdx === 1 }]"
        @click="selectItem(data.id, '2', data.answer, 1)"
      >
        {{ data.item2 || '加载中...' }}
      </div>
      <div 
        :class="['selector-item', { 'current': curIdx === 2 }]"
        @click="selectItem(data.id, '3', data.answer, 2)"
      >
        {{ data.item3 || '加载中...' }}
      </div>
      <div 
        :class="['selector-item', { 'current': curIdx === 3 }]"
        @click="selectItem(data.id, '4', data.answer, 3)"
      >
        {{ data.item4 || '加载中...' }}
      </div>
      <my-btn 
        btnStyle="success"
        @btnClick="goNext"
      >下一题</my-btn>
    </div>
    <div class="selector-wrapper" v-else>
      <div 
        :class="['selector-item', { 'current': curIdx === 0 }]"
        @click="selectItem(data.id, '1', data.answer, 0)"
      >
        正确
      </div>
      <div 
        :class="['selector-item', { 'current': curIdx === 1 }]"
        @click="selectItem(data.id, '2', data.answer, 1)"
      >
        错误
      </div>

      <my-btn 
        btnStyle="success"
        @btnClick="goNext"
      >下一题</my-btn>
    </div>
  </div>
</template>

<script>

import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import MyBtn from '../UI/Button'

export default {
  name: 'Selector',
  props: {
    data: Object
  },
  components: {
    MyBtn
  },
  setup (props) {

    const store = useStore(),
          state = store.state,
          router = useRouter();
    
    const st = reactive({
      curIdx: -1,
      id: 0,
      myAnswer: '',
      rightAnswer: ''
    });

    const selectItem = (id, answer, rightAnswer, index) => {
      st.curIdx = index;
      st.id = id;
      st.myAnswer = answer;
      st.rightAnswer = rightAnswer;
    }

    const goNext = () => {

      if (st.curIdx === -1) {
        return;
      }
      
      const payload = {
        id: st.id,
        myAnswer: st.myAnswer,
        rightAnswer: st.rightAnswer
      }

      store.commit('setMyAnswers', payload);

      if (state.questionPosition === state.data.length - 1) {
        router.push('/result');
        return;
      }

      store.commit('setQuestionPosition', state.questionPosition + 1);
      store.commit('setCurrentQuestion');
      st.curIdx = -1;
    }

    return {
      selectItem,
      goNext,
      ...toRefs(st)
    }
  }
}
</script>

<style lang="scss" scoped>
  .selector-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 .15rem;

    .selector-item {
      width: 100%;
      padding: .12rem;
      margin-top: .15rem;
      border-radius: .05rem;
      box-sizing: border-box;
      font-size: .14rem;
      text-align: center;
      color: #337ab7;
      border: .01rem solid #2e6da4;

      &.current {
        background-color: #337ab7;
        color: #fff;
      }
    }

    .my-btn.btn-success {
      margin-top: .5rem;
    }
  }
</style>