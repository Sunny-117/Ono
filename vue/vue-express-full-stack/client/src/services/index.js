import axios from 'axios';
import qs from 'qs';

export function getStudents (type, score) {
  return new Promise((resolve, reject) => {
    axios.post('/api/getStudents', qs.stringify({
      type,
      score
    })).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    }) 
  })
}