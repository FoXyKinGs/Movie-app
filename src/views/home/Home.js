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
        <img className="spidey" src="images/sm.png"/>
        <div className="billboard">
          <h2>Here's the most watched movie for you</h2>
          <p>Spider-Man: Far For Home</p>
          <Link to='/' className="button">See more</Link>
        </div>
        <div className="list-movie">
          <img src='images/smffh.jpeg'/>
        </div>
      </div>
    </div>
  )
}

export default Home
