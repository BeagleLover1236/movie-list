import React from 'react';
import MovieListEntry from './MovieEntry.jsx'

var MovieList = (props) => {

  if (props) {
    return (
      <div className="movie-list">
        {props.movies.map((movie) => (
          <MovieListEntry key={movie.ID} movie={movie} handleToggle={props.handleToggle}/>
        ))}
      </div>
    )
  }
}

export default MovieList