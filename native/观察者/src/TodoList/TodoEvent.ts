import { ITodo } from ".";

class TodoEvent {

  private static instance: TodoEvent;
  private todoData: ITodo[] = [];
  
  public static create () {
    if (!TodoEvent.instance) {
      TodoEvent.instance = new TodoEvent();
    }

    return TodoEvent.instance;
  }

  public addTodo (todo: ITodo): Promise<ITodo> {
    return new Promise((resolve, reject) => {
      const _todo: ITodo = this.todoData.find(t => t.content === todo.content);
      
      if (_todo) {
        alert('该项已存在');
        return;
      }

      this.todoData.push(todo);
      console.log(this.todoData);
      resolve(todo);
    })
  }

  public removeTodo (id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.todoData = this.todoData.filter(t => t.id !== id);
      console.log(this.todoData);
      resolve(id);
    })
  }

  public toggleTodo (id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.todoData = this.todoData.map(t => {
        if (t.id === id) {
          t.completed = !t.completed;
          console.log(this.todoData);
          resolve(id);
        }
        return t;
      })
    })
  }
}

// addTodo(todo).then((todo) => {
//   addItem(todo);
// })

export default TodoEvent;