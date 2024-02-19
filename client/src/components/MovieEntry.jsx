import React from 'react';
const {useState} = React

var MovieListEntry = (props) => {
  const [watchState, setWatchState] = useState('Add to Watched')
  // const watchedButton = (hasWatched) => {
  //   props.handleToggle(props)
  //   {backgroundColor: hasWatched === 1 || hasWatched === true? 'green' : 'grey'}

  //   if(hasWatched === 1) {
  //     setWatchState('Watched')
  //   }
  // }

  return (
    <div className="movie-entry">
      <h3>{props.movie.title}</h3>
      <button type="button" onClick={() =>
        props.handleToggle(props.movie.ID)
      }>{watchState}</button>
    </div>
  )
}

export default MovieListEntry