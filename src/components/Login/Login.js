import { Button, Form } from 'react-bootstrap'

function Login () {
  return (
    <section>
      <Form>
        <Form.Group className='d-flexmb-4 w-50' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group className='mb-4 w-50' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <Button variant='secondary' type='submit'>
          Registrarse
        </Button>
      </Form>
    </section>
  )
}

export default Login
