import React, { useEffect } from 'react'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom'
// import { CgGitFork, CgLogIn } from 'react-icons/cg'
// import {
//   AiFillStar,
//   AiOutlineHome,
//   AiOutlineUser
// } from 'react-icons/ai'
import HomeIcon from '@mui/icons-material/Home'
import AppBar from '@mui/material/AppBar'
// import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
// import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
// import Menu from '@mui/material/Menu'
// import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
// import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'
// import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
// import AdbIcon from '@mui/icons-material/Adb'

function NavBar () {
  const [loginAuth, setLoginAuth] = React.useState(false)
  const accessToken = window.sessionStorage.getItem('accessToken')

  useEffect(() => {
    if (accessToken) {
      setLoginAuth(true)
    }
  }, [accessToken])

  const handleLogout = () => {
    if (accessToken) {
      window.sessionStorage.removeItem('accessToken')
      setLoginAuth(false)
    }
  }

  return (
    <AppBar position='fixed' color='transparent'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <MenuItem component={Link} to='/' key='Home'>
            <HomeIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
            <Typography textAlign='center'>Home</Typography>
          </MenuItem>
          {loginAuth
            ? (
              <MenuItem component={Link} onClick={handleLogout} key='Logout'>
                <LogoutIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                <Typography textAlign='center'>Logout</Typography>
              </MenuItem>
              )
            : (
              <MenuItem component={Link} to='/login' key='Login'>
                <LoginIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                <Typography textAlign='center'>Login</Typography>
              </MenuItem>
              )}
          <MenuItem component={Link} to='/contact' key='Contact'>
            <ContactPageIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
            <Typography textAlign='center'>Contacto</Typography>
          </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
