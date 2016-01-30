import React from 'react';

export class TaskForm extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        task: '',
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleKeydown = this.handleKeydown.bind(this);
   };

  handleSubmit(event) {
    event.preventDefault();
    const task = this.state.task.trim();

    if (!task) { return; }

    this.props.addTodo(this.state.task);
  };

  handleChange(event) {
    this.setState({ task: event.target.value });
  };

  handleKeydown(event) {
    const task = this.state.task.trim();
    if (!task) { return; }

    if(event.keyCode === 13) {
      event.preventDefault();
      this.props.addTodo(task);
      this.setState({ task: '' });
    }
  };

  render() {
    return (
      <form className='todos__form'>
        <input
          type='text'
          placeholder='Add Task'
          autoFocus='true'
          className='input input-task'
          value={this.state.task}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeydown.bind(this)}
        />
      </form>
    )
  };

}

export default TaskForm;
