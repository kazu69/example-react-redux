import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/Todo_actions';
import Main from '../components/Main.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, actions } = this.props
    return (
      <div className='app'>
        <Main todos={todos} actions={actions} />
      </div>
    )
  }
  static propTypes = {
    todos: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
  };
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
