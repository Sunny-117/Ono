import { ITodoData } from "./js/typings";
import TodoEvent from './js/TodoEvent';

;((doc) => {
  
  const oInput: HTMLInputElement = document.querySelector('input');
  const oAddBtn: HTMLElement = document.querySelector('button');
  const oTodoList: HTMLElement = document.querySelector('.todo-list');

  const todoData: ITodoData[] = [
    {
      id: 1,
      content: '123',
      completed: true
    },
    {
      id: 2,
      content: '234',
      completed: false
    },
    {
      id: 3,
      content: '345',
      completed: true
    },
  ];

  const todoEvent: TodoEvent = new TodoEvent(todoData, oTodoList);

  const init = (): void => {
    bindEvent();
  }

  function bindEvent (): void {
    oAddBtn.addEventListener('click', handleAddBtnClick, false);
    oTodoList.addEventListener('click', handleListClick, false);
  }

  function handleAddBtnClick (): void {
    const val: string = oInput.value.trim();

    if (val.length) {
      const ret = todoEvent.addTodo(<ITodoData>{
        id: 4,
        content: val,
        completed: false
      });

      if (ret && ret === 1001) {
        alert('列表项已存在');
        return;
      }

      oInput.value = '';
    }
  }

  function handleListClick (e: MouseEvent): void {
    const tar = e.target as HTMLElement;
    const tagName = tar.tagName.toLowerCase();

    if (tagName === 'input' || tagName === 'button') {
      const id = parseInt(tar.dataset.id);
      switch (tagName) {
        case 'input':
          todoEvent.toggleComplete(tar, id);
          break;
        case 'button':
          todoEvent.removeTodo(tar, id);
          break;
        default:
          break;
      }
    }
  }
  
  init();

})(document)