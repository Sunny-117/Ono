<template>
  <div :class="['my-alert', `alert-${ type }`]" v-show="visible">
    <div class="inner">
      <header>
        <h1><slot name="header"></slot></h1>
      </header>
      <div class="content">
        <p><slot name="content"></slot></p>
        <div>
          <my-button
            @click="operateAlert(false)"
            :type="type"
          ><slot name="btnText"></slot></my-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const typeMap = [
  'primary',
  'success',
  'danger',
  'warning'
]

export default {
  name: 'MyAlert',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return typeMap.includes(value);
      }
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    operateAlert (isShow) {
      if (!!!isShow) {
        this.$emit('confirm');
      }

      this.visible = isShow;
    }
  }
}
</script>

<style lang="scss">
  .my-alert {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);

    .inner {
      position: absolute;
      top: 50px;
      left: 50%;
      width: 400px;
      margin-left: -200px;
      border-radius: 5px;
      background-color: #fff;
      overflow: hidden;

      h1,
      p {
        margin: 0;
        font-weight: normal;
        font-size: 16px;
      }

      header {
        height: 44px;
        padding: 0 15px;
        line-height: 44px;
        box-sizing: border-box;
      }

      .content {
        padding: 15px;
        box-sizing: border-box;

        button {
          float: right;
          margin: 15px;
        }
      }
    }

    &.alert-primary {
      header {
        background-color: blue;
        color: #fff;
      }
    }

    &.alert-success {
      header {
        background-color: green;
        color: #fff;
      }
    }

    &.alert-danger {
      header {
        background-color: red;
        color: #fff;
      }
    }

    &.alert-warning {
      header {
        background-color: orange;
        color: #333;
      }
    }
  }
</style>