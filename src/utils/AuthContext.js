import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(window.sessionStorage.getItem('jwt'))

  const handleLogin = () => {
    if (window.sessionStorage.getItem('jwt')) {
      setAuthenticated(true)
    }
  }

  const handleLogout = () => {
    setAuthenticated(false)
    window.sessionStorage.removeItem('jwt')
  }

  return (
    <AuthContext.Provider value={{ authenticated, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
