import React from 'react';
import MovieListEntry from './MovieEntry.jsx'

var MovieList = (props) => {

  if (props) {
    return (
      <div className="movie-list">
        {props.movies.map((movie) => (
          <MovieListEntry key={movie.title} handleWatchToggle={props.handleWatchToggle} movie={movie} handleClick={props.handleClick}/>
        ))}
      </div>
    )
  }

  // if (props) {
  //   return (
  //     <div className="movie-list">
  //   {props.movies.map((movie, index) => (
  //     <MovieListEntry title={movie.title} toggleWatched={props.toggleWatched} movie={movie}/>
  //   ))}
  // </div>
  //   )
  // } else {
  //   return (
  //     <div>No Movies</div>
  //   )
  // }

}

export default MovieList