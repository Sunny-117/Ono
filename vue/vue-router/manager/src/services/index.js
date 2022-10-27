import axios from 'axios';
import qs from 'qs';

function getUserRouters (uid) {
  return axios({
    url: 'http://localhost:3000/user_router_auth',
    method: 'post',
    header: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({ uid })
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    throw err;
  })
}

export {
  getUserRouters
}