<template>
  <div class="list">
    <ConsItem
      title="本周日期"
      :content="data.date"
    />
    <Summary
      field="工作"
      :content="data.work"
    />
    <Summary
      field="学业"
      :content="data.job"
    />
    <Summary
      field="恋爱"
      :content="data.love"
    />
    <Summary
      field="财运"
      :content="data.money"
    />
  </div>
</template>

<script>
export default {
  name: 'WeekList',
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