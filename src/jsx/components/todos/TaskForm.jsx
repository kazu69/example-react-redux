import React from 'react'

class TaskForm extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        task: '',
      }

      this.handleInputTaskChange = this.handleInputTaskChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   };

  handleInputTaskChange(event) {
    this.setState({
      task: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const task = this.state.task.trim();

    if (!task) { return; }

    this.props.onFormSubmit({
      task: task,
    });

    this.setState({task: null});

  };

  render() {
    return (
      <form className='taskForm' onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Task'
          value={this.state.task}
          onChange={this.handleInputTaskChange}
        />
        <input type='submit' value='Add' />
      </form>
    )
  };

}

export default TaskForm
