import PgTab from './pg-tab';

export function PgRender (domCollection: HTMLElement[], root: HTMLElement): void {
  const oWrapper: HTMLElement = document.createElement('div'),
        oFrag: DocumentFragment = document.createDocumentFragment();
  
  oWrapper.className = 'container';

  domCollection.forEach((item: HTMLElement) => {
    oFrag.appendChild(item);
  });

  oWrapper.appendChild(oFrag);
  root.appendChild(oWrapper);
}

export {
  PgTab
}