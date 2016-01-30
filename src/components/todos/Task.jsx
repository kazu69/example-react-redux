import React from 'react';

export class Task extends React.Component {
  constructor(props) {
    super(props);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      checked: this.props.todo.complete,
      id: this.props.todo.id
    }
  };

  handleChecked(id, event) {
    this.setState({ checked: !this.state.checked });
    this.props.completeTodo(id);
  };

  handleClick() {
    this.props.deleteTodo(this.state.id);
  }

  render() {
    const todo = this.props.todo;
    const checked = this.state.checked
    return(
      <li className='item' id={this.state.id}>
        <input type='checkbox'
          onChange={this.handleChecked.bind(this, this.state.id)}
          checked={checked} />
        <label className='item__label'>
          {todo.task}
          </label>
        <button
          onClick={this.handleClick.bind(this)}
          className="button button-delete">
            <span>
              delete
            </span>
        </button>
      </li>
    );
  };
}

export default Task;
