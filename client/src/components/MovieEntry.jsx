import React from 'react';
const {useState} = React

var MovieListEntry = (props) => {

  return (
    <div className="movie-entry">
      <h3>{props.movie.title}</h3>
      <button
        onClick={() => {
        props.handleWatchToggle(props.movie.title);
        props.handleClick;}} type="button">Add to watched</button>
    </div>
  )
//   return (
// <div className="movie-entry">
//     <h2>{props.movie.title}</h2>
//     <button type="button" watched={props.movie.watched}>Add to watched list</button>
//   </div>
//   )
}

export default MovieListEntry