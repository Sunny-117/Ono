<template>
  <div class="container">
    <subject-selector />
    <model-selector />
    <div class="btn-wrapper">
      <router-link to="/test">
        <my-btn btnStyle="primary">开始做题</my-btn>
      </router-link>
    </div>
  </div>
</template>

<script>

import SubjectSelector from '@/components/SubjectSelector';
import ModelSelector from '@/components/ModelSelector';
import MyBtn from '@/components/UI/Button';

export default {
  name: 'IndexPage',
  components: {
    SubjectSelector,
    ModelSelector,
    MyBtn
  }
}
</script>

<style lang="scss" scoped>
  .btn-wrapper {
     padding: .3rem .25rem 0;
     box-sizing: border-box;
  }
</style>