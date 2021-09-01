import './css/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id="Home">
      <div id="information">
        <div className="background"></div>
        <h1>Watch your favorite movie everywhere</h1>
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
