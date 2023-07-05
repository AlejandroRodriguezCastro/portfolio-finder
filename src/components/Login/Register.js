import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import register from '../../controller/register.api'

function Register () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await register(name, email, password)
    if (response.status === 201) {
      alert(response.message)
      navigate('/')
    }
    if (response.status === 409) {
      alert(response.message)
    }
    if (response.status === 500) {
      alert(response.message)
    }
  }
  return (
    <div>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type='name' value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type='email' value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type='password' value={password} onChange={handlePasswordChange} required />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
