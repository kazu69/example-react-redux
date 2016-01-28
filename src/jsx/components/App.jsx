import React from 'react'
import TaskBox from './todos/TaskBox.jsx'


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <TaskBox />
      </div>
    );
  }
}

export default App
