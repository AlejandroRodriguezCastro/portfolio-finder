import { Navigate } from 'react-router-dom'
import ContactList from '../components/ContactList/ContactList'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext)
  console.log(authenticated)
  return (
    authenticated ? <ContactList /> : <Navigate to='/login' />
  )
}

export default PrivateRoutes
