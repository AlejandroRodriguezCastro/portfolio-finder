import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login/Login'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar'
import './App.css'
import './style.css'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
