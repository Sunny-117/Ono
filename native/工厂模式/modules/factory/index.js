import ModalFactory from './factory.js';

;(() => {
  
  const oModal = document.getElementsByClassName('modal')[0];
  const oBtnGroup = document.getElementsByClassName('btn-group')[0];
  const modalFactory = new ModalFactory(oModal);

  const init = () => {
    bindEvent();
  }

  function bindEvent () {
    oBtnGroup.addEventListener('click', handleBtnClick, false);
  }

  function handleBtnClick (e) {
    const tar = e.target;
    const tagName = tar.tagName.toLowerCase();

    if (tagName === 'button') {
      const status = tar.dataset.status;
      // changeStatus(status);
      const modal = modalFactory.create('这是一个工程模式的应用场景', status);
      
      switch (status) {
        case 'W':
          modal.outputInfo('这是一个告警提示');
          break;
        case 'E':
          modal.outputInfo('这是一个错误提示');
          break;
        case 'S':
          modal.goHome('https://www.baidu.com');
          break;
        default:
          break;
      }
    }
  }

  // function changeStatus (status) {
  //   switch (status) {
  //     case 'S':
  //       oModal.className = 'modal success';
  //       break;
  //     case 'W':
  //       oModal.className = 'modal warning';
  //       break;
  //     case 'E':
  //       oModal.className = 'modal error';
  //       break;
  //     default: 
  //       break;
  //   }
  // }

  init();
})();