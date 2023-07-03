import { Button, Form } from 'react-bootstrap'
import Card from '../Card/Card'

function Contact () {
  const getUsers = async () => {
    const response = await fetch('http://localhost:4000/api/users')
    const data = await response.json()
    console.log(data)
  }
  return (
    <section>
      <Form>
        <Form.Group className='d-flexmb-4 w-50' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group className='mb-4 w-50' controlId='formBasicName'>
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control type='name' placeholder='Nombre Completo' />
        </Form.Group>
        <Form.Group className='mb-4 w-50' controlId='formBasicPhone'>
          <Form.Label>Telefono</Form.Label>
          <Form.Control type='phone' placeholder='Telefono' />
        </Form.Group>
        <Form.Group className='mb-4 w-50' controlId='formBasiMessage'>
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as='textarea' rows={3} placeholder='Mensaje' />
        </Form.Group>
        <Button onClick={getUsers} variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      <Card />
    </section>
  )
}

export default Contact
