import './css/Register.css'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'

const Register = () => {

  const setUrl = process.env.REACT_APP_API
  const history = useHistory()

  const [data, setData] = useState({
    username: '', password: ''
  })

  const onSubmit = (e) => {
    e.preventDefault()
    if(data.username && data.password) {
      Axios.post(`${setUrl}/v1/register`, data)
      .then((response) => {
        if(response.data.code === 500) {
          alert(response.data.message)
        } else {
          setData({username: '', password: ''})
          history.push('/login')
          alert('Registered')
        }
      })
      .catch((err) => {
        console.log(err)
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
    <div id="Register">
      <div className="background"/>
      <div className="form-box">
        <h2>Register</h2>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Username" value={data.username} onChange={handleChange} name="username"/>
          <br/>
          <input type="password" placeholder="Password" value={data.password} onChange={handleChange} name="password"/>
          <br/>
          <button type="submit">Confirm</button>
        </form>
        <p>Back to <Link className="prefer" to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Register
