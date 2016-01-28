import React from 'react';
import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';
import TodoActions from '../../../actions/TodoActions';
import TodoStore from '../../../stores/TodoStore';

class TaskBox extends React.Component {

  constructor(props) {
    super(props);

    this._getState = this._getState.bind(this);
    this._onChange = this._onChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

    this.state = this._getState();
  };

  componentDidMount() {
    TodoStore.on('change', this._onChange);
  };

  componentWillUnmount() {
    TodoStore.removeListener('change', this._onChange);
  };

  _onChange() {
    this.setState(this._getState());
  };

  _getState() {
    return TodoStore.getState();
  };

  handleFormSubmit(task) {
    let todos = this.state.todos;
    task.id = Date.now();

    TodoActions.create(task);

    this.setState({
      todos: todos.concat([task])
    });
  };

  deleteTask(id) {
    if(!id) { return; }
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id
      })
    });
  };

  render() {
    return (
      <div className="commentBox">
        <h1>Todos</h1>
        <TaskList todos={this.state.todos} onDeleteTask={this.deleteTask} />
        <TaskForm onFormSubmit={this.handleFormSubmit} />
      </div>
    );
  };
}

export default TaskBox;
