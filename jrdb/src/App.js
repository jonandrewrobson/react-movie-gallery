import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Sets default state while data is being loaded
  state = {
    movies: [],
  }

  // Grabbing API data from Movie DB asynchronously
  async componentDidMount() {
    // Try looks for the data and catch outputs errors if the data is unreturned
    try {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ae9ff6163e6554769dfa773c041baa47&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await result.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Route path="/test" component={Test} />
          {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
      </Router>
    );
  }
}

export default App;

const Test = () => (
  <h1>Test</h1>
)
;