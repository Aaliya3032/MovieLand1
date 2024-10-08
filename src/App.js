import './App.css';
import { useEffect, useState } from "react";
import SearchIcon from "./Search.svg";
import MovieCard from './MovieCard';
// 81780a03

const API_URL = 'https://www.omdbapi.com?apikey=81780a03'

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm,setSearchTerm] = useState('')
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data.Search)
    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='Search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0
          ? (
            <div className='container'>
             {movies.map((movie) => (
               <MovieCard movie={movie} />
            ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;
