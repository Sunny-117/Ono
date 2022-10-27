import { ITodo } from ".";

let todoData: ITodo[] = [];

export function addTodo (
    target: any, // 当前装饰的函数的容器 -> TodoList.prototype
    methodName: string, // 被装饰的函数名称
    descriptor: PropertyDescriptor // 描述我们的属性
) {
  const _origin = descriptor.value;

  descriptor.value = function (todo: ITodo) {
    const _todo: ITodo | null = todoData.find((t: ITodo) => t.content === todo.content);

    if (_todo) {
      alert('该项已存在');
      return;
    }

    todoData.push(todo);
    _origin.call(this, todo);
    console.log(todoData);
  }
}

export function removeTodo (
  target: any, // 当前装饰的函数的容器 -> TodoList.prototype
  methodName: string, // 被装饰的函数名称
  descriptor: PropertyDescriptor // 描述我们的属性
) {
  const _origin = descriptor.value;

  descriptor.value = function (id: number) {
    todoData = todoData.filter((todo: ITodo) => todo.id !== id);
    _origin.call(this, id);
    console.log(todoData);
  }
}

export function changeCompleted (
  target: any, // 当前装饰的函数的容器 -> TodoList.prototype
  methodName: string, // 被装饰的函数名称
  descriptor: PropertyDescriptor // 描述我们的属性
) {
  const _origin = descriptor.value;

  descriptor.value = function (id: number) {
    todoData = todoData.map((todo: ITodo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        _origin.call(this, id, todo.completed);
      }

      return todo;
    })
    console.log(todoData);
  }
}