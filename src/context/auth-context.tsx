import React, { useState } from 'react'
import * as auth from 'auth-provider'
import { IUser } from 'screens/project-list/list'

interface IAuthForm {
  username: string
  password: string
}

interface IAuthCnotext {
  user: IUser | null
  login: (authForm: IAuthForm) => Promise<void>
  register: (authForm: IAuthForm) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = React.createContext<IAuthCnotext | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const login = (authForm: IAuthForm) => {
    return auth.login(authForm).then(setUser)
  }
  const register = (authForm: IAuthForm) => {
    return auth.register(authForm).then(setUser)
  }
  const logout = () => {
    return auth.logout().then(() => setUser(null))
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth: () => IAuthCnotext = () => {
  const context = React.useContext(AuthContext)
  console.log(`现在的context是`, context)
  if (!context) {
    throw new Error('useAuth必须在 AuthProvider 中使用')
  }
  return context as IAuthCnotext
}
