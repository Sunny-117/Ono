<template>
  <div class="list">
    <ConsItem
      title="所在年份"
      :content="data.date"
    />
    <ConsItem
      title="幸运石头"
      :content="data.luckeyStone"
    />
    <Summary
      field="健康"
      :content="data.health && data.health[0]"
    />
    <Summary
      field="事业"
      :content="data.career && data.career[0]"
    />
    <Summary
      field="爱情"
      :content="data.love && data.love[0]"
    />
    <Summary
      field="财运"
      :content="data.finance && data.finance[0]"
    />
    <Summary
      field="本年"
      :content="data.mima && `${data.mima.info}。${data.mima.text[0]}`"
    />
  </div>
</template>

<script>
export default {
  name: 'YearList',
  props: {
    data: Object
  }
}
</script>

<style scoped>
  .list {
    padding: .15rem .1rem;
    box-sizing: border-box;
  }
</style>