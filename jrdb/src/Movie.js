import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Setting up poster path with directory and size
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

// Function returning JSX div
const Movie = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
    <Link to={`/${movie.id}`}>
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt="{movie.title}" />
    </Link>
  </div>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
