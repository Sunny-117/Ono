<template>
  <a 
    :href="href"
    :target="target"
    :class="['my-link', type]"
  ><slot></slot></a>
</template>

<script>
export default {
  name: 'MyLink',
  props: {
    href: String,
    type: String,
    target: String
  }
}
</script>

<style lang="scss">
  .my-link {
    color: #222;
    font-size: 14px;
    text-decoration: none;

    &.primary {
      color: blue;
    }

    &.success {
      color: green;
    }

    &.danger {
      color: red;
    }

    &.warning {
      color: orange;
    }
  }
</style>