import TodoEvent from './TodoEvent';
import TodoDom from './TodoDom';

export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

enum EVENT_TYPE {
  ADD = 'add',
  REMOVE = 'remove',
  TOGGLE = 'toggle'
}

class TodoList {

  private static instance: TodoList;
  private oTodoList: HTMLElement;
  private todoEvent: TodoEvent;
  private todoDom: TodoDom;
  private addHandlers: any[] = [];
  private removeHandlers: any[] = [];
  private toggleHandlers: any[] = [];

  constructor (oTodoList: HTMLElement) {
    this.oTodoList = oTodoList;

    this.initTodo();
  }

  public static create (oTodoList: HTMLElement) {
    if (!TodoList.instance) {
      TodoList.instance = new TodoList(oTodoList);
    }

    return TodoList.instance;
  }

  private initTodo () {
    this.todoEvent = TodoEvent.create();
    this.todoDom = TodoDom.create(this.oTodoList);

    for (let k in EVENT_TYPE) {
      this.initHandlers(EVENT_TYPE[k]);
    }
  }

  private initHandlers (type: EVENT_TYPE) {
    switch (type) {
      case EVENT_TYPE.ADD:
        this.addHandlers.push(this.todoEvent.addTodo.bind(this.todoEvent));
        this.addHandlers.push(this.todoDom.addItem.bind(this.todoDom));
        break;
      case EVENT_TYPE.REMOVE:
        this.removeHandlers.push(this.todoEvent.removeTodo.bind(this.todoEvent));
        this.removeHandlers.push(this.todoDom.removeItem.bind(this.todoDom));
        break;
      case EVENT_TYPE.TOGGLE:
        this.toggleHandlers.push(this.todoEvent.toggleTodo.bind(this.todoEvent));
        this.toggleHandlers.push(this.todoDom.toggleItem.bind(this.todoDom));
        break;
      default:
        break;
    }
  }

  public notify<T> (type: string, param: T) {
    let i: number = 0;
    let handlers: any [];
    let res: any;

    switch (type) {
      case EVENT_TYPE.ADD:
        handlers = this.addHandlers;
        break;
      case EVENT_TYPE.REMOVE:
        handlers = this.removeHandlers;
        break;
      case EVENT_TYPE.TOGGLE:
        handlers = this.toggleHandlers;
        break;
      default:
        break;
    }
    
    res = handlers[i](param);

    while (i < handlers.length - 1) {
       i ++;
       res = res.then((param) => {
         return handlers[i](param);
       });
    }
  }
}

export default TodoList;