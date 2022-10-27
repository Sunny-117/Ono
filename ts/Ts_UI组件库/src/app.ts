import { Alert } from '../libs/MyUI';

;((doc) => {

  const oShowAlert: HTMLElement = doc.querySelector('#showAlert');

  const alert = Alert.create({
    duration: 1000,
    headerTitle: '123',
    alertText: '321'
  });

  const init = (): void => {
    bindEvent();
  }

  function bindEvent (): void {
    oShowAlert.addEventListener('click', showAlert, false);
  }

  function showAlert (): void {
    alert.show('success', {
      duration: 200,
      headerTitle: '成功',
      alertText: '这时一个成功的alert'
    });
  }

  init();

})(document);