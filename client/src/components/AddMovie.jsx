import React from 'react'
const {useState} = React

var AddMovie = (props) => {

  const [movieEntry, setMovieEntry] = useState('')

  const updateChange = (event) => {
    setMovieEntry(event.target.value)
  }

  return (
    <div className='add-movie'>
    <input type="text" placeholder="Add Movie"id="add" onChange={updateChange} value={movieEntry}></input>
    <button type="button" onClick={() => {props.handleAdd(movieEntry); setMovieEntry('')}}>Add Movie</button>
  </div>
  )
}

export default AddMovie

