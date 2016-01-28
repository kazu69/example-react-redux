import React from 'react';
import Task from './Task.jsx';

export class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.todosNodes = this.todosNodes.bind(this);
    this._onDeleteTask = this._onDeleteTask.bind(this);
  };

  static propTypes = {
    todos: React.PropTypes.array
  };

  static defaultProps = {
    todos: []
  };

  todosNodes(todos) {
    return todos.map((todo) => {
      return(
        <Task todo={todo} onDeleteTask={this._onDeleteTask} />
      );
    });
  };

  _onDeleteTask(id) {
    this.props.onDeleteTask(id);
  };

  render() {
    return (
        <ul className="todos">
          {this.todosNodes(this.props.todos)}
        </ul>
    );
  };
}

export default TaskList;
