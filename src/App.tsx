import React from 'react'
import './App.css'
import AuthenticatedScreen from './authenticated-app'
import UnauthenticatedScreen from './unauthenticated-app/index'
import { useAuth } from 'context/auth-context'

function App() {
  const { user } = useAuth()

  return (
    <div className="App">
      {user ? <AuthenticatedScreen /> : <UnauthenticatedScreen />}
    </div>
  )
}

export default App
