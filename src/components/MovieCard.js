import React from 'react'
import './css/MovieCard.css'
import { Link } from 'react-router-dom'

function MovieCard(props) {

  const setUrl = process.env.REACT_APP_API

  return (
    <div id="MovieCard">
      <img src={`${setUrl}/images/${props.image}`} alt='test'/>
      <div className='desc'>
        <p className='title'>{props.title}</p>
        <p className='genre'>{props.genre}</p>
        <p className='rating'>Rating : {props.rating}</p>
        <div className='synopsis'>
          <p>{props.synopsis}</p>
        </div>
      </div>
      <Link to={`/movie/${props.id}`} className='button'>See detail</Link>
    </div>
  )
}

export default MovieCard
