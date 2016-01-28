import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'

function run() {
  const div = document.createElement('div');
  div.className = 'app';
  document.body.appendChild(div);
  ReactDOM.render(<App />, div);
}

const loadedStates = ['complete', 'loaded', 'interactive'];
if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}

