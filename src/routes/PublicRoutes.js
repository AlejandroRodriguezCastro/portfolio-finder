import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

function PublicRoute () {
  return (
    <>
      <Route path='/' component={Home} />
      <Route path='/login' component={Login} />
    </>
  )
}

export default PublicRoute
