<template>
  <div class="about">
    <input type="text" placeholder="请输入用户名" v-model="username" />
    <button @click="handleEnterBtnClick">进入聊天室</button>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        username: ''
      }
    },
    mounted () {
      const username = localStorage.getItem('username');

      if (username) {
        this.$router.push('/');
        return;
      }
    },
    methods: {
      handleEnterBtnClick () {
        const username = this.username.trim();

        if (username.length < 6) {
          alert('用户名不小于6位');
          return;
        }

        localStorage.setItem('username', username);
        this.$router.push('/');
      }
    }
  }
</script>
