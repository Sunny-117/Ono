import { userInfoTpl } from './templates';

export function observer (userInfo, viewDom) {

  var _storageInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  var _retInfo = {};

  var init = function () {
    initData(_storageInfo, _retInfo, userInfo);
    initDom(_retInfo, viewDom);
  }

  function initData (storageInfo, retInfo, userInfo) {
    for (var k in storageInfo) {
      if (!userInfo[k]) {
        userInfo[k] = storageInfo[k];
      }
    }

    for (var k in userInfo) {
      (function (k) {
        Object.defineProperty(retInfo, k, {
          get () {
            return userInfo[k];
          },
          set (newValue) {
            userInfo[k] = newValue;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            document.querySelector(`.__${k}`).innerHTML = userInfo[k];
          }
        })
      })(k);
    }
  }

  function initDom (retInfo, dom) {
    dom.innerHTML = userInfoTpl(retInfo);
  }

  init();

  return _retInfo;
}