import Tab from './Tab';

;(() => {
  const init = () => {
    const tab: Tab = new Tab({
      el: '.tab',
      type: 'fade'
    });

    tab.create();
  }

  init();
})();