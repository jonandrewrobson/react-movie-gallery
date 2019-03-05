import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    input: 'hello'
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value.trim() // Trim removes spaces
    })
  } // This syntax allows to use this. when referring to component

  submit = () => {
    console.log(this.text.value);
  } // Console logging the value of the input

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to using props" />
          <h3>{this.state.input}</h3>
          <input type="text" onChange={this.updateInput} value={this.state.input} />
          <input type="text" ref={(input) => this.text = input} />
          <button onClick={this.submit}>Show Value</button>
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
