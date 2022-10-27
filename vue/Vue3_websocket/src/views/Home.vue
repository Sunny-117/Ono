<template>
  <div>
    <ul>
      <li
        v-for="item of msgList"
        :key="item.id"
      >
        <p>
          <span>{{ item.user }}</span>
          <span>{{ new Date(item.dateTime) }}</span>
        </p>
        <p>
          消息：{{ item.msg }}
        </p>
      </li>
    </ul>
    <input type="text" placeholder="请输入消息" v-model="msg" />
    <button @click="handleSendBtnClick">发送</button>
  </div>
</template>

<script>

/**
 * msgList []
 * {
 *   id: new Date().getTime(),
 *   user: username -> localStorage
 *   dateTime: new Date().getTime()
 *   msg: msg
 * }
 * 
 * 
 */

import { onMounted, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useWebSocket } from '../hooks';

export default {
  name: 'Home',
  setup () {
    const router = useRouter();
    const ws = useWebSocket(handleMessage);
    const state = reactive({
      msg: '',
      msgList: []
    });

    let username = '';

    onMounted (() => {
      username = localStorage.getItem('username');

      if (!username) {
        router.push('/login');
        return;
      }
    })

    const handleSendBtnClick = () => {
      const _msg = state.msg;

      if (!_msg.trim().length) {
        return;
      }

      ws.send(JSON.stringify({
        id: new Date().getTime(),
        user: username,
        dateTime: new Date().getTime(),
        msg: state.msg
      }));

      state.msg = '';
    }

    function handleMessage (e) {
      const _msgData = JSON.parse(e.data);
      state.msgList.push(_msgData);
    }

    return {
      ...toRefs(state),
      handleSendBtnClick
    }
  }
}
</script>

