import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    toggle: true
  } // Sets initial state on creation of our component to true

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  } // Defined method and changed state of toggle to opposite of current state

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to using props" />
          {this.state.toggle && // Conditional statement checks to see if true AND outputs <p>
            <p>This should show and hide</p>
          }
          <button onClick={this.toggle}>Show / Hide</button>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props; // Allows to use props without having to type this.props
    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;
