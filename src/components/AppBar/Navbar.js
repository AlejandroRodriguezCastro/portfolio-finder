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
import Slide from '@mui/material/Slide'
import PropTypes from 'prop-types'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Fade from '@mui/material/Fade'

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

function ScrollTop (props) {
  const { children, window } = props
  const triggerScrollUp = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center'
      })
    }
  }

  return (
    <Fade in={triggerScrollUp}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
}

function NavBar (props) {
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
      </HideOnScroll>
      <ScrollTop {...props}>
        <Fab size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

export default NavBar
