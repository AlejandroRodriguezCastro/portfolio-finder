import { RouteMap } from './routes/Routes'
import { AuthProvider } from './utils/AuthContext'

function App () {
  return (
    <AuthProvider>
      <RouteMap />
    </AuthProvider>
  )
}

export default App
