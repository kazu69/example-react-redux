import { createStore } from 'redux';
import rootReducer from '../reducers/index.js';

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
};
