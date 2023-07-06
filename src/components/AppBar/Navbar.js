import { useEffect, useContext, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login'
import EmailIcon from '@mui/icons-material/Email'
import LogoutIcon from '@mui/icons-material/Logout'
import { AuthContext } from '../../utils/AuthContext'

function NavBar () {
  const { handleLogout, authenticated } = useContext(AuthContext)
  const [loginAuth, setLoginAuth] = useState(false)

  useEffect(() => {
    setLoginAuth(authenticated)
  }, [authenticated])

  const handleButtonLogout = () => {
    if (authenticated) {
      setLoginAuth(authenticated)
      handleLogout()
    }
  }

  const handleButtonLogin = () => {
    if (!authenticated) {
      setLoginAuth(authenticated)
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
              <MenuItem component={Link} onClick={handleButtonLogout} key='Logout'>
                <LogoutIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                <Typography textAlign='center'>Logout</Typography>
              </MenuItem>
              )
            : (
              <MenuItem component={Link} onClick={handleButtonLogin} to='/login' key='Login'>
                <LoginIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                <Typography textAlign='center'>Login</Typography>
              </MenuItem>
              )}
          {loginAuth
            ? (
              <MenuItem component={Link} to='/contact-list' key='ContactList'>
                <EmailIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                <Typography textAlign='center'>Mensajes</Typography>
              </MenuItem>
              )
            : null}
          <MenuItem component={Link} to='/contact' key='Contact'>
            <ContactPageIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
            <Typography textAlign='center'>Contactame</Typography>
          </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
