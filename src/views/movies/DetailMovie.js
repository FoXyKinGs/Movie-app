import React from 'react'
import './css/DetailMovie.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

function DetailMovie() {
  
  const setUrl = process.env.REACT_APP_API
  const [movie, setMovie] = useState([])
  const param = useParams()
  
  const rupiah = (value) => {
    return parseInt(value).toLocaleString('id-ID')
  }

  useEffect(() => {
    const url = setUrl
    const id = param.id
    const getDetailMovieAPI = () => {
      Axios.get(`${url}/v1/movie/${id}`)
      .then((response) => {
        setMovie(response.data[0])
      })
      .catch((err) => {
        console.log(err)
      })
    }

    getDetailMovieAPI()
  }, [param, setUrl])

  return (
    <div id="DetailMovie">
      {
        movie.name ? (
          <div className='movie'>
            <img src={`${setUrl}/images/${movie.image}`} alt='test'/>
            <div className='desc'>
              <p className='title'>{movie.name} <sup className='rating'>{movie.rate}</sup> </p>
              <p className='genre'>{movie.genre}</p>
              <div className='synopsis'>
                <p>{movie.synopsis}</p>
              </div>
              <div className='conf'>
                <button className='button-buy'>Buy</button>
                <p className='price'>IDR {rupiah(movie.price)}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading">
            <p>Loading . . . .</p>
          </div>
        )
      }
    </div>
  )
}

export default DetailMovie
