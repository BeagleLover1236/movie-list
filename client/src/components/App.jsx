import React from 'react';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import MovieList from './MovieList.jsx';
import axios from 'axios';
const {useState, useEffect} = React;


const App = () => {
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(movies)
  const [isFiltered, setIsFiltered] = useState(false)
  const [filteredMovies, setFilteredMovies] = useState(movies)
  const [pageToggled, setPageToggled] = useState(false)
  const [toWatch, setToWatch] = useState(movies)


  const tabFilter = (data) => {
    const toWatchArr = data.filter((movie) => movie.hasWatched === 0
    )
    const watchedArr = data.filter((movie) => movie.hasWatched === 1
    )

    setToWatch(toWatchArr)

    setShowMovies(watchedArr)
  }

  const handleToggle = (id) => {
    console.log(id)
    axios.put(`http://127.0.0.1:3000/data/movies/${id}`, {hasWatched:1})
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
    axios.get('http://127.0.0.1:3000/data/movies')
    .then((response) => {
      console.log(response.data)
      setMovies(response.data)
      tabFilter(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const toggle = (boolean) => {
    setPageToggled(boolean)
  }

  const handleSearch = (eventValue) => {
    var filtered = movies.filter((movie) => movie.title.toString().toLowerCase().includes(eventValue.toLowerCase()))
    setIsFiltered(true)

    if(isFiltered === true) {
      setFilteredMovies(filtered)
    }

    if(eventValue === '' || eventValue.length === 0 || eventValue === null) {
      setIsFiltered(false)
    }
  }

  const handleAdd = (eventValue) => {
    axios.post('http://127.0.0.1:3000/data/movies', {title: eventValue})
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })

    axios.get('http://127.0.0.1:3000/data/movies')
    .then((response) => {
      console.log(response.data)
      setMovies(response.data)
      tabFilter(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/data/movies')
    .then((response) => {
      console.log(response.data)
      setMovies(response.data)
      tabFilter(response.data)

    })
    .catch((err) => {
      console.log(err)
    })
  }, [])


  let temp;
  if(isFiltered === true) {
    temp = <MovieList handleToggle={handleToggle} movies={filteredMovies}/>
  } else if (pageToggled === true) {
    temp = <MovieList handleToggle={handleToggle} movies={showMovies}/>
  } else if (pageToggled === false) {
    temp = <MovieList handleToggle={handleToggle} movies={toWatch}/>
  }

  return (
    <div>
      <div className="title">
        <h1>MovieList</h1>
      </div>
      <div className='add-search'>
        <AddMovie handleAdd={handleAdd}/>
        <Search handleSearch={handleSearch}/>
      </div>
      <div className="watch-towatch">
      <button onClick={() => toggle(true)}>Watched</button>
      <button onClick={() => toggle(false)}>To Watch</button>
      </div>
      <div>
        {temp}
      </div>
    </div>
  )
};

export default App
