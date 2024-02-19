import React from 'react'
const {useState} = React

var AddMovie = (props) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (event) => {
    setInputValue(event.target.value)
    console.log(inputValue)
  }
  return (
    <div className='add-movie'>
    <input type="text" placeholder="Add Movie"id="add" onChange={handleInputValue} value={inputValue}></input>
    <button type="button" onClick={() => {
      props.handleAdd(inputValue);
      setInputValue('');
    }}>Add Movie</button>
  </div>
  )
}

export default AddMovie

