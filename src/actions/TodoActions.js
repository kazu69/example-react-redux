import AppDispatcher from '../dispatcher/AppDispatcher';

const TodoActions = {
  create: (task) => {
    AppDispatcher.dispatch({
      actionType: 'TODO_CREATE',
      data: task
    });
  },
  destroy: (id) => {
    AppDispatcher.dispatch({
      actionType: 'TODO_DELETE',
      id: id
    });
  }
};

export default TodoActions;
