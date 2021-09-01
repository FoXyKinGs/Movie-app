import './css/TopNavbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const TopNavbar = () => {

  const global = useSelector((state) => state.globalReducers)

  const [boxOpen, setBoxOpen] = useState(false)

  const triggerBoxOpen = (value) => {
    setBoxOpen(value)
  }

  const actionLogOut = () => {
    let r = window.confirm('Are you sure want to log out?')
    if (r === true) {
      localStorage.removeItem('token')
      triggerBoxOpen(false)
      alert('Logout success')
    }
  }

  return (
    <div id="TopNavbar">
      <Link to="/" className="title">Movie Store</Link>
      <div className="router-list">
        <Link className="list" to='/'>Home</Link>
        <Link className="list" to='/movies'>Movies</Link>
      </div>
      {
        global.token ?
          (
            <div className="uname">
              <p onClick={triggerBoxOpen(true)}>{global.token}</p>
              <div>
                {
                  boxOpen ? (
                    <div className="box-open">
                      <button onClick={actionLogOut}>Log out</button>
                    </div>
                  ) : ''
                }
              </div>
            </div>
          ) :
        (
          <div className="auth">
            <Link className="button" to="/login">Login</Link>
          </div>
        )
      }
    </div>
  )
}

export default TopNavbar