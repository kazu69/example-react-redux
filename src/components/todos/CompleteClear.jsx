import React from 'react';

class ClearComplete extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.clearCompletedTodo();
  }

  render() {
    return (
      <button
        onClick={this.handleClick.bind(this)}
        className="button clear-button">
        <span>clear completed</span>
      </button>
    );
  }
}

export default ClearComplete;
