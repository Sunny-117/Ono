import { ITodoData } from "../../../typings";

abstract class Component {
  protected static inputView (placeholderText: string, buttonText: string): string {
    return `
      <div>
        <input type="text" class="todo-input" placeholder="${ placeholderText }" />
        <button class="add-btn">${ buttonText }</button>
      </div>
    `;
  }

  protected static listView (data: ITodoData[]): string {
    return `
      <div class="todo-list">
        ${
          data.length ?
          data.map((todo: ITodoData) => {
            return Component.todoView(todo);
          })
          :
          '当前没有数据'
        }
      </div>
    `.split(',').join('');
  }

  protected static todoView (todo: ITodoData): string {
    const { id, content, completed } = todo;

    return `
      <div class="todo-item">
        <input type="checkbox" data-id="${ id }" ${ completed ? 'checked' : '' } />
        <span style="text-decoration: ${ completed ? 'line-through' : '' }">${ content }</span>
        <button data-id="${ id }">删除</button>
      </div>
    `;
  }
}

export default Component;