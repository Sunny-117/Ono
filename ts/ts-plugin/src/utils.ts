import { TYPE } from './Tab';

function setType (type: TYPE | string | undefined): TYPE {
  if (!type) {
    return TYPE.FADE;
  }
  
  for (let k in TYPE) {
    if (TYPE[k] === type) {
      return type as TYPE;
    }
  }

  return TYPE.FADE;
}

function setEl (el: string | undefined, type: TYPE): HTMLElement {
  const isNormalMark: boolean = /^(\.|\#)/.test(el);
  let _el: HTMLElement | null;

  if (!isNormalMark) {
    _el = document.querySelector(`.${el}`) || document.querySelector(`#${el}`);
  } else {
    _el = document.querySelector(el);
  }

  if (!_el) {
    throw new TypeError('This element with the class or ID name is not exist.');
  }

  _el.className += ' ' + type;

  return _el;
}

export {
  setType,
  setEl
};