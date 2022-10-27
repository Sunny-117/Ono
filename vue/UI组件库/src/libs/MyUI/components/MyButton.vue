<template>
  <button
    @click="emitClick"
    :class="['my-button', `btn-${ type }`, $MyUI.btnShadow ? 'btn-shadow' : '']"
  ><slot></slot></button>
</template>

<script>

const typeMap = [
  'default',
  'primary',
  'success',
  'danger',
  'warning'
]

export default {
  name: 'MyButton',
  emits: ['click'],
  props: {
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return typeMap.includes(value);
      }
    }
  },
  methods: {
    emitClick (ev) {
      this.$emit('click', ev);
    }
  }
}
</script>

<style lang="scss">
  .my-button {
    height: 34px;
    padding: 0 15px;
    border: none;
    border-radius: 3px;

    &.btn-default {
      background-color: #fff;
      color: #333;
      border: 1px solid #ccc;
    }

    &.btn-primary {
      background-color: blue;
      color: #fff;
    }

    &.btn-success {
      background-color: green;
      color: #fff;
    }

    &.btn-danger {
      background-color: red;
      color: #fff;
    }

    &.btn-warning {
      background-color: orange;
      color: #333;
    }
    
    &.btn-shadow {
      box-shadow: 1px 3px 5px #666;
    }
  }

  
</style>