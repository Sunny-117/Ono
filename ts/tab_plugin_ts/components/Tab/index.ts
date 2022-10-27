import { PgTab } from '../../plugins';

import './index.scss';

interface IProps {
  curIdx?: number
}

function Tab (props: IProps) {
  return new PgTab({
    currentIndex: props.curIdx,
    data: [
      {
        navItem: '导航1',
        pageItem: '页面1'
      },
      {
        navItem: '导航2',
        pageItem: '页面2'
      },
      {
        navItem: '导航3',
        pageItem: '页面3'
      },
      {
        navItem: '导航4',
        pageItem: '页面4'
      },
    ],
    callback (newIdx: number) {
      console.log(newIdx);
      console.log('Good Bye');
    }
  }).render();
}

export default Tab;