import { Switch, Route } from 'react-router-dom'
import Home from '../views/home/Home'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import Movies from '../views/movies/Movies'
import DetailMovie from '../views/movies/DetailMovie'
import TopNavbar from '../components/TopNavbar'

const router = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <TopNavbar/>
        <Home/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/register'>
        <Register/>
      </Route>
      <Route path='/movies' exact>
        <TopNavbar/>
        <Movies />
      </Route>
      <Route path='/movie/:id'>
        <TopNavbar/>
        <DetailMovie />
      </Route>
    </Switch>
  )
}

export default router
