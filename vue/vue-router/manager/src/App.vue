<template>
  <div id="app">
    <MHeader />
    <SideBar />
    <PageBoard />
  </div>
</template>

<script>
  
  import MHeader from '@/components/Header';
  import SideBar from '@/components/SideBar';
  import PageBoard from '@/components/PageBoard';

  export default {
    name: 'App',
    components: {
      MHeader,
      SideBar,
      PageBoard
    }
  }
</script>

<style>
  #app {
    height: 100%;
  }
</style>

