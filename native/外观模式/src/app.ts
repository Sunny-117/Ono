import TodoList from './components/TodoList';
import { ITodoData } from './typings';

;((doc) => {

  const oApp: HTMLElement = doc.querySelector('#app');
  
  const todoData: ITodoData[] = [];

  const init = (): void => {
    const todoList: TodoList = new TodoList(oApp, todoData);
    todoList.init();
  }

  init();

})(document);