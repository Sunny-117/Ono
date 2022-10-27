import tpl from './info.tpl';

const oApp = document.querySelector('#app');

const info = {
  name: '小野森森',
  age: 34,
  career: 'Web开发老师',
  hobby: '旅行、钢琴'
};

console.log(info);

oApp.innerHTML = tpl(info);


