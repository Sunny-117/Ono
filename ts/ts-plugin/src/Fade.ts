import Base from './Base';
import { TYPE } from './Tab';

class Fade extends Base {

  constructor (el: HTMLElement) {
    super(el, TYPE.FADE); 
    this.getMothod(this.setPage);
  }

  private setPage (pageItems: HTMLCollection, curIdx: number) {
    [...pageItems].map((item: HTMLElement) => {
      item.className = 'page-item';
    });

    pageItems[curIdx].className += ' active';
  }
}

export default Fade;