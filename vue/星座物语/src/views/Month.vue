<template>
  <div class="container">
    <ConsCard
      :name="monthData.name"
      :allIndex="Number(monthData.all)"
    />
    <ConsList :data="monthData" />
  </div>
</template>

<script>
import { onMounted, computed, ref, onActivated } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';

import ConsList from '@/components/List/Month';

export default {
  name: 'MonthPage',
  components: {
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
      monthData: computed(() => state.month)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>