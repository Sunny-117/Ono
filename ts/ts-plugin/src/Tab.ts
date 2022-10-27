import { setType, setEl } from './utils';
import Fade from './Fade';
import Slide from './Slide';

interface ITabOptions {
  el: string;
  type: TYPE | string;
}

export enum TYPE {
  FADE = 'fade',
  SLIDE = 'slide'
}

class Tab {
  private _el: HTMLElement;
  private _type: TYPE | string;
  constructor(options: ITabOptions) {
    this._type = setType(options.type);
    this._el = setEl(options.el, this._type as TYPE);
  }

  public create () {
    switch (this._type) {
      case TYPE.FADE:
        return new Fade(this._el);
      case TYPE.SLIDE:
        return new Slide(this._el);
      default:
        break;
    }
  } 
}

export default Tab;