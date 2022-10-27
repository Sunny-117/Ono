<template>
  <div class="container">
    <ConsCard
      :name="todayData.name"
      :allIndex="todayData.all"
    />
    <NumList :data="todayData" />
    <ConsList :data="todayData" />
  </div>
</template>

<script>

import { onMounted, computed, ref, onActivated } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';

import NumList from '@/components/NumList';
import ConsList from '@/components/List/Today';

export default {
  name: 'TodayPage',
  components: {
    NumList,
    ConsList
  },
  setup () {
    const store = useStore(),
          state = store.state,
          status = ref('');

    onMounted(() => {
      getData(store);
      status.value = state.consName;
    });

    onActivated(() => {
      if (status.value !== state.consName) {
        getData(store);
        status.value = state.consName;
      }
    })

    return {
      todayData: computed(() => state.today)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>