import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';

let _todos = [
  {id: 1, task: 'Eat lunch' },
  {id: 2, task: 'Buy milk' }
];

function create(task) {
  const id = Date.now();
  const todo = { id: id, task: task };
  _todos = _todos.concat(todo);
};

function destroy(id) {
  _todos = _todos.filter((todo) => {
    return todo.id !== id
  });
};

// TodoStoreにEventEmitterのmethodを追加
const TodoStore = assign({}, EventEmitter.prototype, {
  getState: () => {
    return { todos: _todos };
  }
});

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case 'TODO_CREATE':
      create(action.data.task.trim());
      TodoStore.emit('change');
      break;
    case 'TODO_DELETE':
      destroy(action.id);
      TodoStore.emit('change');
      break;
  };
});

export default TodoStore;
