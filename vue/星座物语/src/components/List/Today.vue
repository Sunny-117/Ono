<template>
  <div class="list">
    <ConsItem
      title="今日日期"
      :content="data.datetime"
    />
    <ConsItem
      title="配对星座"
      :content="data.QFriend"
    />
    <ConsItem
      title="幸运颜色"
      :content="data.color"
    />
    <ConsItem
      title="幸运数字"
      :content="data.number"
    />
    <Summary
      field="今日"
      :content="data.summary"
    />
  </div>
</template>

<script>

export default {
  name: 'TodayList',
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