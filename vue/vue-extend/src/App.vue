<template>
  <div>
    <button @click="openMessageBox">SHOW</button>
    <button @click="openInfoMessageBox">INFO</button>
    <button @click="openSuccessMessageBox">SUCCESS</button>
    <button @click="openWarnMessageBox">WARN</button>
    <button @click="openDangerMessageBox">DANGER</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    openMessageBox () {
      this.$messageBox.show({
        title: 'App',
        content: 'This is CONTENT for App',
        type: 'warn'
      }, () => {
        console.log('OPEN');
      });
    },
    openInfoMessageBox () {
      this.$messageBox.info({
        title: 'Info',
        content: 'This is CONTENT for Info'
      }, () => {
        console.log('INFO');
      });
    },
    openSuccessMessageBox () {
      this.$messageBox.success({
        title: 'Success',
        content: 'This is CONTENT for Success'
      }, () => {
        console.log('SUCCESS');
      });
    },
    openWarnMessageBox () {
      this.$messageBox.warn({
        title: 'Warn',
        content: 'This is CONTENT for Warn'
      }, () => {
        console.log('WARN');
      });
    },
    openDangerMessageBox () {
      this.$messageBox.danger({
        title: 'Danger',
        content: 'This is CONTENT for Danger'
      }, () => {
        console.log('DANGER');
      });
    }
  }
}
</script>

<style>

</style>