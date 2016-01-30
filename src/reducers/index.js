import { combineReducers } from 'redux';
import todos from './todos.js';

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
