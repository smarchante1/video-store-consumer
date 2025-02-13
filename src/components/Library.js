import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types'

const Library = (props) => {
  const { movieLibrary, selectMovie, filterMoviesCallback } = props;

  const movieCards = movieLibrary.map((movie, i) => {
    return (
        <MovieCard key={i} 
          movie={movie}
          filterMoviesCallback={filterMoviesCallback}
          selectMovie={() => {selectMovie(movie)}} />
      )
  })
  return (
    <div>
      <div className="card-columns">
        { movieCards }
      </div>
    </div>
  );
}

Library.propTypes = {
  movieLibrary: PropTypes.array,
  selectMovie: PropTypes.func.isRequired,
  filterMoviesCallback: PropTypes.func.isRequired,
}

export default Library;