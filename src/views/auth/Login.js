import './css/Login.css'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux'

const Login = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const setUrl = process.env.REACT_APP_API

  const [data, setData] = useState({
    username: '', password: ''
  })


  const onSubmit = (e) => {
    e.preventDefault()
    if(data.username && data.password){
      Axios.post(`${setUrl}/v1/login`, data)
      .then((response) => {
        dispatch({
          type: 'TOKEN_DATA',
          payload: response.data.username
        })
        localStorage.setItem('token', response.data.username)
        setData({username: '', password: ''})
        alert('Login success')
        history.push('/')
      })
      .catch((err) => {
        alert('Username or Password Wrong!')
      })
    } else {
      alert('Field cannot be empty')
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div id="Login">
      <div className="background"/>
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Username" value={data.username} onChange={handleChange} name="username"/>
          <br/>
          <input type="password" placeholder="Password" value={data.password} onChange={handleChange} name="password"/>
          <br/>
          <button type="submit">Login</button>
        </form>
        <p>New to Movie Store? <Link className="prefer" to="/register"> Register</Link></p>
      </div>
    </div>
  )
}

export default Login
