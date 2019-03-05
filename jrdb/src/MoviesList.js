import React, { Component } from 'react';
import Movie from './Movie';

class MoviesList extends Component {
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
      <div>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default MoviesList;
