import './css/TopNavbar.css'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
  return (
    <div id="TopNavbar">
      <p className="title">Movie Store</p>
      <div className="router-list">
        <Link className="list" to='/'>Home</Link>
      </div>
      <div className="auth">
        <Link className='button' to='/register'>Register</Link>
        <Link className='button' to='/login'>Login</Link>
      </div>
    </div>
  )
}

export default TopNavbar