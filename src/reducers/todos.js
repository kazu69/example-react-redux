const initialState = [
  {id: 1, task: 'Eat lunch', complete: true },
  {id: 2, task: 'Buy milk', complete: false }
];

export default function todos(state = initialState, action) {
  switch(action.type) {
    case 'TODO_CREATE':
      const id = Date.now();
      return [
        ...state,
        {
          id: id,
          task: action.task.trim()
        }
      ];
      break;

    case 'TODO_DELETE':
      return state.filter( todo =>
        todo.id !== action.id
      );
      break;

    case 'TODO_COMPLETE':
      return state.filter( todo => {
        if(todo.id == action.id) {
          todo.complete = !todo.complete;
        }
        return todo;
      });
      break;

    case 'CLEAR_COMPLETED':
      return state.filter( todo => {
        if(!todo.complete) return todo;
      });
      break;

    default:
      return state;
  }
}
