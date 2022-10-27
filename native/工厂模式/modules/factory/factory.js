import { ModalTypes, ModalClassName } from './typing.js';

/**
 * 
 * 有一些公共的方法、属性、静态工具
 * Modal 父类
 * 
 * 对每种状态内部属性加工，或者是每种状态的功能扩展
 * Success Warning Error Modal 不同的类 -> Modal
 * 
 * 有个工厂通过传入的状态来给我自动实例化相应的类
 * Modal Factory -> 
 */

class Modal {
  constructor(status) {
    this.status = status;
  }

  get className() {
    let classStr = 'modal';
    switch (this.status) {
      case ModalTypes.SUCCESS:
        classStr += ' ' + ModalClassName.SUCCESS;
        break;
      case ModalTypes.WARNING:
        classStr += ' ' + ModalClassName.WARNING;
        break;
      case ModalTypes.ERROR:
        classStr += ' ' + ModalClassName.ERROR;
        break;
      default:
        break;
    }

    return classStr;
  }

  static checkStatusIsExist (types, status) {
    for (let k in types) {
      if (types[k] === status) {
        return true;
      }
    }

    return false;
  }

  static outputInfo (info) {
    console.log(info);
  }
}

class SuccessModal extends Modal {
  constructor(title) {
    super(ModalTypes.SUCCESS);
    this.title = '成功：' + title;
  }

  goHome (url) {
    setTimeout(() => {
      window.location.href = url;
    }, 3000);
  }
}

class WarningModal extends Modal {
  constructor(title) {
    super(ModalTypes.WARNING);
    this.title = '告警：' + title;
  }

  outputInfo (info) {
    Modal.outputInfo('告警提示：' + info);
  }
}

class ErrorModal extends Modal {
  constructor(title) {
    super(ModalTypes.ERROR);
    this.title = '失败：' + title;
  }

  outputInfo(err) {
    Modal.outputInfo('错误提示：' + err);
  }
}

class ModalFactory {
  constructor (dom) {
    this.dom = dom;
  }

  create (title, status) {
    const statusIsExist = Modal.checkStatusIsExist(ModalTypes, status);

    if (!statusIsExist) {
      throw new Error('Modal type is incorrect.');
    }

    const dom = this.dom;
    let modal = null;

    switch (status) {
      case ModalTypes.SUCCESS:
        modal = new SuccessModal(title);
        break;
      case ModalTypes.WARNING:
        modal = new WarningModal(title);
        break;
      case ModalTypes.ERROR:
        modal = new ErrorModal(title);
        break;
      default:
        break;
    }

    dom.getElementsByTagName('header')[0].innerText = modal.title;
    dom.className = modal.className;

    return {
      outputInfo: modal.outputInfo,
      goHome: modal.goHome
    }
  }
}

export default ModalFactory;