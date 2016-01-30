import React from 'react';
import Task from './Task.jsx';

export class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.todosNodes = this.todosNodes.bind(this);
  };

  static propTypes = {
    todos: React.PropTypes.array
  };

  static defaultProps = {
    todos: []
  };

  todosNodes() {
    const { todos, completeTodo, deleteTodo } = this.props;
    return todos.map((todo) => {
      return(
        <Task
          todo={todo}
          key={todo.id}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo} />
      );
    });
  };

  render() {
    return (
        <ul className="todos__list">
          {this.todosNodes()}
        </ul>
    );
  };
}

export default TaskList;
