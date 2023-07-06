
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import login from '../../controller/login.api'
import { AuthContext } from '../../utils/AuthContext'
import { Grid } from '@mui/material'

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
    <>
      <div style={{ marginTop: '60px', padding: '0px' }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={8} md={6}>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '46%' }}>
                  <button type='submit'>Login</button>
                  <button style={{ backgroundColor: '#273845' }} onClick={() => navigate('/register')}>Register</button>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Login
