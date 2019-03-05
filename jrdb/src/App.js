import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import MoviesList from './MoviesList';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/Test" component={Test} />
      </Switch>
    </div>
  </Router>
);

export default App;

const Test = () => (
  <h1>TEST</h1>
);
