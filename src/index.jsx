import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import configureStore from './stores/Todo_store.js';
const store = configureStore();

function run() {
  const div = document.createElement('div');
  div.className = 'application';
  document.body.appendChild(div);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div);
}

window.addEventListener('DOMContentLoaded', run, false);
