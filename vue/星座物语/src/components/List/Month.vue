<template>
  <div class="list">
    <Summary
      field="健康"
      :content="data.health"
    />
    <Summary
      field="工作"
      :content="data.work"
    />
    <Summary
      field="爱情"
      :content="data.love"
    />
    <Summary
      field="财运"
      :content="data.money"
    />
    <Summary
      field="本月"
      :content="data.all"
    />
  </div>
</template>

<script>
export default {
  name: 'MonthList',
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
  .list {
    padding: .15rem .1rem;
    box-sizing: border-box;
  }
</style>