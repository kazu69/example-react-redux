import React from 'react';
import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';
import CompleteClear from './CompleteClear.jsx';

class TaskBox extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    const { todos, actions } = this.props
    return (
      <div className="todos">
        <h1 className="todos__title">Todos</h1>
        <TaskForm addTodo={actions.addTodo} />
        <TaskList
          todos={todos}
          completeTodo={actions.completeTodo}
          deleteTodo={actions.deleteTodo} />
        <footer className='todos__footer'>
          <CompleteClear clearCompletedTodo={actions.clearCompletedTodo} />
        </footer>
      </div>
    );
  };
}

export default TaskBox;
