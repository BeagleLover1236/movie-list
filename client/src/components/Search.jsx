import React from 'react'
const {useState} = React

var Search = (props) => {

  const [searchValue, setSearchValue] = useState('');
  const handleInputValue = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <div className="search">
      <input type="text" placeholder="Search Movies" onChange={handleInputValue}></input>
      <button type="button" onClick={() => {
        props.handleSearch(searchValue)
      }}>Search</button>
    </div>
  )

}

export default Search