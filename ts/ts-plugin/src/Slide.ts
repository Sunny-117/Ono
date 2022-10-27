import Base from './Base';
import { TYPE } from './Tab';

class Slide extends Base {
  constructor(el: HTMLElement) {
    super(el, TYPE.SLIDE);

    this.getMothod(this.setPage);
  }

  private setPage (pageInner: HTMLElement, curIdx: number) {
    pageInner.style.transform = `translate3d(${-(curIdx * 500)}px, 0, 0)`;
  }
}

export default Slide;