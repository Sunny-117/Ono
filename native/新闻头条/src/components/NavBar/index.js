import itemTpl from './tpl/item.tpl';
import wrapperTpl from './tpl/index.tpl';
import './index.scss';

import { tplReplace, scrollToTop } from '../../libs/utils';

export default {
  name: 'NavBar',
  _curIdx: 0,
  tpl (data) {
    let itemList = '';

    data.map(({ type, title }, index) => {
      itemList += tplReplace(itemTpl, {
        isCurrent: !index ? 'current' : '',
        title,
        type
      })
    });

    return tplReplace(wrapperTpl, {
      itemList,
      wrapperW: .6 * data.length
    });
  },
  bindEvent (setType) {
    const oNavBar = document.querySelector('.nav');
    const oNavItems = document.querySelectorAll('.item');

    oNavBar.addEventListener('click', this._setNav.bind(this, oNavItems, setType), false);
  },
  _setNav (items, setType) {
    const tar = arguments[2].target;
    const className = tar.className.trim();
    
    if (className === 'item') {
      const type = tar.dataset.type;
      setType(type);
      scrollToTop();
      items[this._curIdx].className = 'item';
      this._curIdx = [].indexOf.call(items, tar);
      items[this._curIdx].className += ' current';
    }
  }
}