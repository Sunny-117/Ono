export interface IAlertOptions {
  duration?: number;
  headerTitle?: string;
  alertText?: string;
}

export enum DEFAULT_VALUES {
  HEADER_TITLE = 'This is my Alert',
  ALERT_TEXT = 'This is my Alert content',
  DURATION = 150
}

export enum UI_COLOR_TYPES {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning'
}