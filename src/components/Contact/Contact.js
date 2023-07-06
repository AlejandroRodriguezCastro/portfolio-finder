import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveContact } from '../../controller/contact.api'
import { Grid } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LocationCityIcon from '@mui/icons-material/LocationCity'

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
    <>
      <div style={{ marginTop: '60px', padding: '0px' }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={8} md={6}>
            <div>
              <div style={{ marginBottom: '20px' }}>
                <h2>Informacion de Contacto</h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '170px', marginBottom: '20px' }}>
                <div style={{ marginRight: '15px' }}>
                  <LocalPhoneIcon />
                </div>
                <div style={{ marginRight: '15px' }}>
                  <a> 123456789 </a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '100px', marginBottom: '20px' }}>
                <div style={{ marginRight: '15px' }}>
                  <EmailIcon />
                </div>
                <div style={{ marginRight: '15px' }}>
                  <a href='mailto:alejandro@gmail.com'>alejandro@gmail.com</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '160px' }}>
                <div style={{ marginRight: '15px' }}>
                  <LocationCityIcon />
                </div>
                <div style={{ marginRight: '15px' }}>
                  <a>Buenos Aires</a>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={6}>
            <div>
              <div style={{ marginBottom: '20px' }}>
                <h2>Contacto</h2>
              </div>
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
                  <input type='tel' value={phone} pattern='[0-9]{1,20}' onChange={handlePhoneChange} required />
                </div>
                <div>
                  <label>Mensaje:</label>
                  <textarea value={message} onChange={handleMessageChange} required style={{ width: '195px' }} />
                </div>
                <button type='submit'>Enviar</button>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Contact
