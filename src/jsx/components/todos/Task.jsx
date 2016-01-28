import React from 'react';
import TodoActions from '../../../actions/TodoActions';

export class Task extends React.Component {
  constructor(props) {
    super(props);
    this._onChecked = this._onChecked.bind(this);
  };

  _onChecked(id, event) {
    event.preventDefault();
    if(!event.target.checked) { return; }
    TodoActions.destroy(id);
  };

  render() {
    return(
      <li className='todo-item'>
        <input type='checkbox' onChange={this._onChecked.bind(this, this.props.todo.id)} />
        {this.props.todo.task}
      </li>
    );
  };
}

export default Task;
