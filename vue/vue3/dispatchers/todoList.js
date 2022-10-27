import reducer from '@/reducers/todoList';
import { ADD, REMOVE, COMPLETED } from '@/actions/todoList';

export default (ctx) => {

  const {
  	addItem,
  	removeItem,
  	changeCompleted
  } = reducer(ctx.todoData);

  return function (type, arg) {
  	switch (type) {
  		case ADD:
  		  ctx.todoData = addItem(arg);
  		  break;
  		case REMOVE:
  		  ctx.todoData = removeItem(arg);
  		  break;
  		case COMPLETED:
  		  ctx.todoData = changeCompleted(arg);
  		  break;
  		default:
  		  break;
  	}
  }
}