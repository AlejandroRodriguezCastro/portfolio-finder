import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveContact } from '../../controller/contact.api'

function Contact () {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await saveContact(name, email, message, phone)
    if (response.status === 200) {
      alert(response.message)
      navigate('/')
    }
    if (response.status === 500) {
      alert(response.message)
    }
  }
  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre Completo:</label>
          <input type='name' value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type='email' value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Telefono:</label>
          <input type='phone' value={phone} onChange={handlePhoneChange} required />
        </div>
        <div>
          <label>Mensaje:</label>
          <input type='string' value={message} onChange={handleMessageChange} required />
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Contact
