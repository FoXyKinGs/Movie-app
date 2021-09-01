import React, { useEffect, useState } from 'react'
import './css/Movies.css'
import Axios from 'axios'
import Movie from '../../components/MovieCard'

function Movies() {

  const setUrl = process.env.REACT_APP_API
  const [movies, setMovies] = useState([])

  const getMoviesAPI = () => {
    Axios.get(`${setUrl}/v1/movies`)
    .then((response) => {
      setMovies(response.data.data)      
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getMoviesAPI()
  }, [])

  return (
    <div id="Movies">
      {
        movies.length > 0 ? 
        (
          <div>
            {movies.map((movie, key) => {
              return (
                <div key={key}>
                  <Movie 
                    title={movie.name}
                    image={movie.image}
                    genre={movie.genre}
                    rating={movie.rate}
                    synopsis={movie.synopsis}
                  />
                </div>
              )
            })}
          </div>
        ) : 
        (
          <div className='loading'>
            Loading . . . 
          </div>
        )
      }
    </div>
  )
}

export default Movies
