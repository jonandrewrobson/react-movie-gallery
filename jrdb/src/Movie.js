import React from 'react';
import PropTypes from 'prop-types';

// Setting up poster path with directory and size
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

// Function returning JSX div
const Movie = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
    <img src={`${POSTER_PATH}${movie.poster_path}`} alt="{movie.title}" />
  </div>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
