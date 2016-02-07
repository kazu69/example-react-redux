import objectAssign from 'object-assign';

const initialState = [
  {id: 1, task: 'Eat lunch', complete: true },
  {id: 2, task: 'Buy milk', complete: false }
];

export default function todos(state = initialState, action) {
  switch(action.type) {
    case 'TODO_CREATE':
      let updata = objectAssign([], state)
      updata.push({
        id: state.length + 1,
        task: action.task.trim(),
        complete: false
      });

      return updata;

    case 'TODO_DELETE':
      updata = objectAssign([], state.filter( todo => {
        todo.id !== action.id
      }));
      return updata;

    case 'TODO_COMPLETE':
      updata = objectAssign([], state.filter( todo => {
        if(todo.id == action.id) {
          todo.complete = !todo.complete;
        }
        return todo;
      }));

      return updata;

    case 'CLEAR_COMPLETED':
      updata = objectAssign([], state.filter( todo => {
        if(!todo.complete) return todo;
      }));
      return updata;

    default:
      return state;
  }
}
