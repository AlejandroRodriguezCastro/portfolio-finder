import { Route, Routes } from 'react-router-dom'
import Profile from '../pages/Profile'

function PrivateRoute () {
  return (
    <Routes>
      <Route path='/profile' Component={Profile} />
    </Routes>
  )
}

export default PrivateRoute
