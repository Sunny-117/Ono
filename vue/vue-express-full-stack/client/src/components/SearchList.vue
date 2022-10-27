<template>
  <table border="1" width="400">
    <thead>
      <tr>
        <th>ID</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>分数</th>
      </tr>
    </thead>
    <tbody v-if="listData.length > 0">
      <tr
        v-for="item of listData"
        :key="item.id"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.score }}</td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr><td colspan="4" align="center"><slot></slot></td></tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'SearchList',
  props: {
    listData: {
      type: Array,
      default () {
        return [];
      }
    }
  }
}
</script>

<style>

</style>