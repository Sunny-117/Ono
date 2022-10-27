<!-- 

DOM操作   数据操作  ->  事件出来函数的绑定

DOM操作   数据操作 -> 之间没有任何联系

TodoList -> 

add -> addTodo   addItem  

function addTodo () {
  操作数据
  addItem(todo);
}

addTodo -> todo -> addItem(todo) -> 操作DOM

function test (todo) {
  Promise -> addTodo(todo);  resolve(todo);  then todo -> addItem
  addItem(todo);
}

add     addTodo addItem
remove  removeTodo removeItem
toggle  toggleTodo  toggleItem

[addTodo, addItem, setLocalStorage]
[removeTodo, removeItem]
[toggleTodo, toggleItem]

Promise.then -->