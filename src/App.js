import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { changeMessage, changeForm } from './actions/message';

class App extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.changeMessage(this.props.value);
  }

  handleChange(e) {
    this.props.changeForm(e.target.value);
  }

  render() {
    console.log(this.props.state);
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <h3>Message:</h3>
          <p>{this.props.message}</p>
          <h4>Enter a new message:</h4>
          <form onSubmit={this.onSubmit}>
            <input type='text' onChange={this.handleChange} value={this.props.value} />
            <input type='submit' />
          </form>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeMessage: (newMessage) => dispatch(changeMessage(newMessage)),
    changeForm: (value) => dispatch(changeForm(value))
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.messageReducer.message,
    value: state.formReducer.value,
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
