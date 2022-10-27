import Template from "./Template";
import { DEFAULT_VALUES, IAlertOptions, UI_COLOR_TYPES } from "./typings";
import $ from 'jquery';

class Alert extends Template {

  private _headerTitle: string;
  private _alertText: string;
  private _duration: number;
  private _oAlert: JQuery<HTMLElement>;
  private _oXIcon: JQuery<HTMLElement>;
  private _oInner: JQuery<HTMLElement>;
  private _oHeaderTitle: JQuery<HTMLElement>;
  private _oAlertText: JQuery<HTMLElement>;

  constructor (options: IAlertOptions) {
    super();
    const _options: IAlertOptions = Alert.mergeOptions(options);

    this._headerTitle = _options.headerTitle;
    this._alertText = _options.alertText;
    this._duration = _options.duration;
    this.render();
    this.bindEvent();
  }

  private static mergeOptions (options: IAlertOptions) {
    const _defaultOptions: IAlertOptions = {
      headerTitle: DEFAULT_VALUES.HEADER_TITLE as string,
      alertText: DEFAULT_VALUES.ALERT_TEXT as string,
      duration: DEFAULT_VALUES.DURATION as number
    }
    if (!options) {
      return _defaultOptions;
    }

    return Object.assign(_defaultOptions, options);
  }

  private bindEvent () {
    this._oXIcon.on('click', this.hide.bind(this));
    this._oAlert.on('click', this.hide.bind(this));
    this._oInner.on('click', (e) => e.stopPropagation());
  }

  private render () {
    document.body.appendChild(this.alertView({
      headerTitle: this._headerTitle,
      alertText: this._alertText
    }));

    this._oAlert = $('.alert');
    this._oXIcon = $('.icon');
    this._oInner = $('.inner');
    this._oHeaderTitle = this._oAlert.find('header h1');
    this._oAlertText = this._oAlert.find('.alert-wrap p');
  }
  
  public static create(options?: IAlertOptions) {
    return new Alert(options);
  }

  public show (type?: string, options?: IAlertOptions) {
    if (options) {
      const { headerTitle, alertText, duration } = options;
      duration && (this._duration = duration);
      headerTitle && this._oHeaderTitle.html(headerTitle);
      alertText && this._oAlertText.html(alertText);
    }
  
    let _type: UI_COLOR_TYPES = UI_COLOR_TYPES.PRIMARY;

    if (type) {
      for (let k in UI_COLOR_TYPES) {
        if (UI_COLOR_TYPES[k] === type) {
          _type = type as UI_COLOR_TYPES;
        }
      }
    }

    this._oAlert.addClass(_type);
    this._oAlert.fadeIn(this._duration);
  }

  public hide () {
    this._oAlert.fadeOut(this._duration);
  }
}

export default Alert;