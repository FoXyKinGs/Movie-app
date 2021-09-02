import React from 'react'
import './css/DetailMovie.css'
import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Axios from 'axios'

function DetailMovie() {
  
  const global = useSelector(state => state.globalReducers)

  const setUrl = process.env.REACT_APP_API
  const [movie, setMovie] = useState([])
  const [purchased, setPurchased] = useState([])
  const param = useParams()
  
  const rupiah = (value) => {
    return parseInt(value).toLocaleString('id-ID')
  }

  const buyMovie = () => {
    const result = {
      id_user: global.id,
      id_movie: param.id
    }
    Axios.post(`${setUrl}/v1/movie`, result, {headers: {auth: global.token}})
    .then((response) => {
      alert('Success')
      purchasedMovie(global.token, param.id)
    })
    .catch((err) => {
      alert('Login for buying')
    })
  }

  const purchasedMovie = useCallback((username, movie) => {
    Axios.get(`${setUrl}/v1/purchasedMovie?username=${username}&movie=${movie}`)
    .then((response) => {
      setPurchased(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[setUrl])

  useEffect(() => {
    const id = param.id
    const getDetailMovieAPI = () => {
      Axios.get(`${setUrl}/v1/movie/${id}`)
      .then((response) => {
        setMovie(response.data[0])
      })
      .catch((err) => {
        console.log(err)
      })
    }
    getDetailMovieAPI()

    if(global.token) {
      purchasedMovie(global.token, param.id)
    } else {
      setPurchased([])
    }
  }, [global.token, param.id, setUrl, purchasedMovie])

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
                {
                  purchased.length < 1 ? (
                    <div className='purchase'>
                      <button className='button-buy' onClick={() => buyMovie()}>Buy</button>
                      <p className='price'>IDR {rupiah(movie.price)}</p>
                    </div>
                  ) : (
                    <div>
                      <button className='watch-button'>Watch</button>
                    </div>
                  )
                }
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
