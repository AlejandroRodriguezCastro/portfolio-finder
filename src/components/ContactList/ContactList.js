import { Form } from 'react-bootstrap'

function ContactList () {
  return (
    <section>
      <Form>
        <Form.Group className='d-flexmb-4 w-50' controlId='formBasicEmail'>
          <Form.Label>ACAAAAs</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
      </Form>
    </section>
  )
}

export default ContactList
