export function addTodo(task) {
  return { type: 'TODO_CREATE', task }
};

export function deleteTodo(id) {
  return { type: 'TODO_DELETE', id }
};

export function completeTodo(id) {
  return { type: 'TODO_COMPLETE', id }
};

export function clearCompletedTodo() {
    return { type: 'CLEAR_COMPLETED' }
};
