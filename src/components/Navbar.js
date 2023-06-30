import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { CgGitFork, CgFileDocument, CgLogIn } from 'react-icons/cg'
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineUser
} from 'react-icons/ai'

function NavBar () {
  return (
    <Navbar fixed='top'>
      <Container fluid>
        <Navbar.Brand href='/' className='d-flex'>
          <img src='https://create-react-app.dev/img/logo.svg' className='rounded' alt='brand' />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto' defaultActiveKey='#home'>
            <Nav.Item>
              <Nav.Link
                as={Link} to='/'
              >
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/contacto'
              >
                <AiOutlineUser style={{ marginBottom: '2px' }} /> Contacto
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/resume'
              >
                <CgFileDocument style={{ marginBottom: '2px' }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/login'
              >
                <CgLogIn style={{ marginBottom: '2px' }} /> Login
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className='fork-btn'>
              <Button
                href='https://github.com/alejandrorodriguezcastro'
                target='_blank'
                className='fork-btn-inner'
              >
                <CgGitFork style={{ fontSize: '1.2em' }} />{' '}
                <AiFillStar style={{ fontSize: '1.1em' }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
