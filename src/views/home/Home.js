import './css/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
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
              <button>Subscribe</button>
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
              <button>Subscribe</button>
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
              <button>Subscribe</button>
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
