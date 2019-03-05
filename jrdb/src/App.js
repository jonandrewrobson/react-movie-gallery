import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const movies = [{
  id: 1,
  title: 'Dark City',
  description: 'This is a description'
}, {
  id: 2,
  title: 'Get Out'
}, {
  id: 3,
  title: 'Men Who Stare At Goats'
}
];

// Iterating over movies. Array, mapping over it, taking each movie, and returning the movie component with the movies passed in. Loops over each movie and outputs a new component.

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => <Movie key={movie.id} movie={movie} description={movie.description} />)}
      </div>
    );
  }
}

export default App;
