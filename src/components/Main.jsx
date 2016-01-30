import React from 'react';
import TaskBox from './todos/TaskBox.jsx';

class Main extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    todos: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  render() {
    const { todos, actions } = this.props
    return (
      <main>
        <TaskBox todos={todos} actions={actions} />
      </main>
    );
  }

};

export default Main
