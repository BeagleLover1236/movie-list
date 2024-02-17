import React from 'react'
const {useState} = React

var Search = (props) => {

  const [currentValue, setCurrentValue] = useState('')

  const updateSearch = (event) => {
    setCurrentValue(event.target.value)
  }

  return (
    <div className="search">
      <input type="text" placeholder="Search Movies" value={currentValue} onChange={updateSearch}></input>
      <button type="button" onClick={() => {props.handleSearch(currentValue); setCurrentValue('')}}>Search</button>
    </div>
  )

}

export default Search