const express = require('express');
const { fileOperation } = require('./utils');

const app = express();

app.get('/remove', (req, res) => {
  // let todoList = JSON.parse(readFileSync(resolve(__dirname, 'todo.json'), 'utf8') || '[]');
  
  // function main (todoList) {
  //   return  todoList.filter(todo => todo.id !== 3);
  // }
  // todoList = todoList.filter(todo => todo.id !== 3);

  // writeFileSync(resolve(__dirname, 'todo.json'), JSON.stringify(todoList));

  const result = fileOperation('todo.json', function (todoList) {
    return todoList.filter(todo => todo.id !== 3);
  });

  console.log(result);

  res.send(JSON.stringify(result));
});

app.listen(8080, function () {
  console.log('Listening on 8080');
})