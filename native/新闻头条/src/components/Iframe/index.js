import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../libs/utils';

export default {
  name: 'NewsFrame',
  tpl(url) {
    return tplReplace(tpl, {
      url
    })
  }
}