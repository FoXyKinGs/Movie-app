import './css/Home.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'

const Home = () => {

  const global = useSelector(state => state.globalReducers)

  const setUrl = process.env.REACT_APP_API
  const [bronze, setBronze] = useState([])
  const [silver, setSilver] = useState([])
  const [platinum, setPlatinum] = useState([])

  const buyMembership = (val) => {
    const result = {
      id_user: global.id,
      id_membership: val
    }
    Axios.post(`${setUrl}/v1/membership`, result, {headers: {auth: global.token}})
    .then((response) => {
      alert('Success')
      getBronzeMembership(global.token)
      getSilverMembership(global.token)
      getPlatinumMembership(global.token)
    })
    .catch((err) => {
      alert('Login for buying')
    })
  }

  const getBronzeMembership = useCallback((username) => {
    Axios.get(`${setUrl}/v1/checkingMembership?username=${username}&membership=bronze`)
    .then((response) => {
      setBronze(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [setUrl])

  const getSilverMembership = useCallback((username) => {
    Axios.get(`${setUrl}/v1/checkingMembership?username=${username}&membership=silver`)
    .then((response) => {
      setSilver(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [setUrl])

  const getPlatinumMembership = useCallback((username) => {
    Axios.get(`${setUrl}/v1/checkingMembership?username=${username}&membership=platinum`)
    .then((response) => {
      setPlatinum(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [setUrl])

  useEffect(() => {
    if(global.token) {
      getBronzeMembership(global.token)
      getSilverMembership(global.token)
      getPlatinumMembership(global.token)
    } else {
      setBronze([])
      setSilver([])
      setPlatinum([])
    }
  }, [global.token, getBronzeMembership, getSilverMembership, getPlatinumMembership])

  return (
    <div id="Home">
      <div id="information">
        <div className="background"></div>
        <h1>Watch your favorite movie everywhere</h1>
      </div>
      <div id="membership">
        <div className='membership-box'>
          <div className='silver'>
            <p className='title'>Silver</p>
            <p className='benefit-title'>Benefit</p>
            <ul className='benefit'>
              <li>Free claim 1 DC Movie</li>
              <li>Free claim 1 Anime Movie</li>
            </ul>
            <div className='conv'>
              <p className='price'>IDR 68.000<sup className='subs'>* 1 month</sup></p>
              {
                silver.length < 1 ? (
                  <button className='subscribe' onClick={() => buyMembership(2)}>Subscribe</button>
                ) : (
                  <button className='subscribed'>Subscribed</button>
                )
              }
            </div>
          </div>
          <div className='platinum'>
            <p className='title'>Platinum</p>
            <p className='benefit-title'>Benefit</p>
            <ul className='benefit'>
              <li>Free claim 2 Any Movie</li>
              <li>Free claim 1 Anime Movie</li>
              <li>Free claim 1 Marvel Movie</li>
              <li>Free claim 1 DC Movie</li>
            </ul>
            <div className='conv'>
              <p className='price'>IDR 148.000<sup className='subs'>* 1 month</sup></p>
              {
                platinum.length < 1 ? (
                  <button className='subscribe' onClick={() => buyMembership(3)}>Subscribe</button>
                ) : (
                  <button className='subscribed'>Subscribed</button>
                )
              }
            </div>
          </div>
          <div className='bronze'>
            <p className='title'>Bronze</p>
            <p className='benefit-title'>Benefit</p>
            <ul className='benefit'>
              <li>Free claim 1 Anime Movie</li>
            </ul>
            <div className='conv'>
              <p className='price'>IDR 28.000<sup className='subs'>* 1 month</sup></p>
              {
                bronze.length < 1 ? (
                  <button className='subscribe' onClick={() => buyMembership(1)}>Subscribe</button>
                ) : (
                  <button className='subscribed'>Subscribed</button>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <div id="movies">
        <img className="spidey" src="images/sm.png" alt="spider pict"/>
        <div className="billboard">
          <h2>Here's the most watched movie for you</h2>
          <p>Spider-Man: Far From Home</p>
          <div>
            <Link to='/movie/4' className="button">See detail</Link>
            <span>| </span>
            <Link to='/movies' className="button">See more movies</Link>
          </div>
        </div>
        <div className="list-movie">
          <img src='images/smffh.jpeg' alt="Spider-Man: Far From Home, Poster"/>
        </div>
      </div>
    </div>
  )
}

export default Home
