
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import login from '../../api/login.api'
import { AuthContext } from '../../utils/AuthContext'

function Login () {
  const { handleLogin } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await login(email, password)
    if (response.status === 200) {
      handleLogin()
      navigate('/')
    }
    if (response.status === 401) {
      alert(response.message)
    }
    if (response.status === 500) {
      alert(response.message)
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type='email' value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type='password' value={password} onChange={handlePasswordChange} required />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
