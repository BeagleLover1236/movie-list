import React from 'react';

const {useState, useEffect} = React


const App = () => {
  const [movies, setMovies] = useState(movieList)
  const [currentAdd, setCurrentAdd] = useState('')
  const [currentFiltered, setCurrentFilterd] = useState(movies)
  const [isFilterd, setIsFiltered] = useState(false)
  const [isWatched, setIsWatched] = useState([])
  const [toggleWatched, setToggleWatched] = useState(false)
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    console.log('ff')
  };

  var handleAdd = (event) => {
    setCurrentAdd(event)
  }


  var handleSearch = (event) => {
    var filtered = movies.filter((movie) =>  movie.title.toString().toLowerCase().includes(event.toLowerCase()))
    setIsFiltered(true)
    setCurrentFilterd(filtered)

    if(event === null || event.length === 0 || event === '')
    {setIsFiltered(false)}
  }

  var handleWatchToggle = (event) => {
    var watched = movies.map(movie => {
      if(movie.title === event) {
        return {...movie, isWatched: true}
      } else {
        return movie;
      }
    })
    setMovies(watched)
    console.log(movies)
  }

  var handleWatch = () => {
    const watchedArr = []
    for (var i = 0; i < movies.length; i++) {
      if(movies[i].isWatched === true) {
        watchedArr.push(movies[i])
      }
    }
    setMovies(watchedArr)
  }

  var handleToWatch = () => {
    const toWatchedArr = []
    for (var i = 0; i < movies.length; i++) {
      if(movies[i].isWatched === false) {
        toWatchedArr.push(movies[i])
      }
    }
    setMovies(toWatchedArr)

  }



  useEffect(() => {
    if(currentAdd !== '') {
      setMovies(movies.concat({title: currentAdd, isWatched: false}))
    }
  },[currentAdd])

  return (

    <div>
      <div className="title">
        <h1>MovieList</h1>
      </div>
      <div className='add-search'>
      <AddMovie handleAdd={handleAdd}/>
      <Search handleSearch={handleSearch}/>
      </div>
      <div>
        <div className='watch-towatch'>
          <button onClick={handleWatch}>Watched</button>
          <button onClick={handleWatch}>To Watch</button>
        </div>
        <div>
        {isFilterd ? (
        <MovieList movies={currentFiltered}/>
      ) : (
        <MovieList handleClick={handleClick}handleWatchToggle={handleWatchToggle} movies={movies}/>
      )}
        </div>
      </div>
    </div>
  )
};

export default App