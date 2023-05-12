import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/home' element={<Layout />} />
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
