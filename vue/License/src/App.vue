<template>
  <div id="app">
    <my-header>{{ headerTitle }}</my-header>
    <router-view/>
  </div>
</template>

<script>

import { computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import MyHeader from '@/components/Header';

export default {
  name: 'App',
  components: {
    MyHeader
  },
  setup () {
    const router = useRouter(),
          store = useStore();

    router.push('/');

    watch(() => {
      return router.currentRoute.value.name;
    }, (value) => {
      store.commit('setHeaderTitle', value);
    })

    return {
      headerTitle: computed(() => store.state.headerTitle),
      routerName: router.currentRoute.value.name 
    }
  }
}
</script>
