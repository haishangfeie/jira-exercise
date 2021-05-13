import './App.css'
import AuthenticatedScreen from './authenticated-app'
import UnauthenticatedScreen from './unauthenticated-app/index'
import { useAuth } from 'context/auth-context'
// import { GridComponent } from 'exercise/grid'

function App() {
  const { user } = useAuth()

  return (
    <div className="App">
      {user ? <AuthenticatedScreen /> : <UnauthenticatedScreen />}
      {/* <GridComponent /> */}
    </div>
  )
}

export default App
