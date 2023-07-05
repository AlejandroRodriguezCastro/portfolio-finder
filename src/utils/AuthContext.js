import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)

  const handleLogin = () => {
    setAuthenticated(true)
  }

  const handleLogout = () => {
    setAuthenticated(false)
    window.sessionStorage.removeItem('accessToken')
  }

  return (
    <AuthContext.Provider value={{ authenticated, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
