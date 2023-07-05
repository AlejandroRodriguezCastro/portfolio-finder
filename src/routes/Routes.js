import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../components/Login/Login'
import Contact from '../components/Contact/Contact'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { AuthContext } from '../utils/AuthContext'
import ContactList from '../components/ContactList/ContactList'

export const RouteMap = () => {
  const { authenticated } = useContext(AuthContext)
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/contact-list'
          element={authenticated ? <ContactList /> : <Navigate to='/login' />}
        />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}
