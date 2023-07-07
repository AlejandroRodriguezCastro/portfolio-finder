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
import LogoutIcon from '@mui/icons-material/Logout'
import { AuthContext } from '../../utils/AuthContext'
import Slide from '@mui/material/Slide'
import PropTypes from 'prop-types'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Icons from '../Icons/Icons'
import Badge from '@mui/material/Badge'
import Stack from '@mui/material/Stack'
import MailIcon from '@mui/icons-material/Mail'
import { getContacts } from '../../controller/contact.api'

function HideOnScroll (props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
}

function NavBar (props) {
  const { handleLogout, authenticated } = useContext(AuthContext)
  const [loginAuth, setLoginAuth] = useState(false)
  const [badgeCount, setBadgeCount] = useState(0)

  const getMessages = async () => {
    try {
      const contacts = await getContacts()
      const unreadMessages = contacts.message.filter((contact) => !contact.readed)
      setBadgeCount(unreadMessages.length)
    } catch (error) {
      console.error('Error fetching messages:', error)
    }
  }

  useEffect(() => {
    setLoginAuth(authenticated)
    if (authenticated) {
      getMessages()
      const refreshInterval = setInterval(() => {
        getMessages()
      }, 60 * 1000)

      return () => {
        clearInterval(refreshInterval)
      }
    }
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
    <>
      <HideOnScroll {...props}>
        <AppBar position='fixed' color='transparent'>
          <Container maxWidth='xl'>
            <Toolbar disableGutters id='back-to-top-anchor'>
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
                    <div>
                      <Stack>
                        <Badge badgeContent={badgeCount} color='error'>
                          <MailIcon />
                        </Badge>
                      </Stack>
                    </div>
                    <div style={{ marginLeft: '15px' }}>
                      <Typography textAlign='center'>Mensajes</Typography>
                    </div>
                  </MenuItem>
                  )
                : null}
              <MenuItem component={Link} to='/contact' key='Contact'>
                <ContactPageIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                <Typography textAlign='center'>Contactame</Typography>
              </MenuItem>
              <div style={{ marginLeft: 'auto' }}>
                <Icons />
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  )
}

export default NavBar
