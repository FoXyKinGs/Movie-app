import './css/TopNavbar.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

const TopNavbar = () => {

  const dispatch = useDispatch()
  const global = useSelector((state) => state.globalReducers)
  const [token, setToken] = useState(null)

  const actionLogOut = () => {
    let r = window.confirm('Are you sure want to log out?')
    if (r === true) {
      dispatch({
        type: 'TOKEN_DATA',
        payload: null
      })
      dispatch({
        type: 'ID_DATA',
        payload: null
      })
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      alert('Logout success')
    }
  }

  useEffect(() => {
    setToken(global.token)
  }, [global.token])

  return (
    <div id="TopNavbar">
      <Link to="/" className="title">Movie Store</Link>
      <div className="router-list">
        <Link className="list" to='/'>Home</Link>
        <Link className="list" to='/movies'>Movies</Link>
      </div>
      {
        token ?
          (
            <div className="uname">
              <p>{token}</p>
              <button onClick={actionLogOut}/>
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