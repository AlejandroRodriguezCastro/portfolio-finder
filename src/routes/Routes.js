import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../components/Login/Login'
import Contact from '../components/Contact/Contact'
import Navbar from '../components/Navbar'
import PrivateRoute from '../utils/PrivateRoute'
import ContactList from '../components/ContactList/ContactList'

export const RouteMap = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />} />
        <Route path='/contact-list' element={<ContactList />} />
        <Route />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}
