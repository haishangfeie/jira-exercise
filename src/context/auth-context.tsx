import React, { useState } from 'react'
import * as auth from 'src/auth-provider'
import { IUser } from 'src/screens/project-list/list'
import { useMount } from 'src/utils'
import http from 'src/utils/http'

interface IAuthForm {
  username: string
  password: string
}

interface IAuthCnotext {
  user: IUser | null
  setUser: (user: IUser | null) => void
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

  useMount(() => {
    const token = auth.getToken()
    if (token) {
      http('me', {
        token,
      })
        .then((data) => setUser(data?.user))
        .catch((err) => {
          console.log(err)
        })
    }
  })

  return (
    <AuthContext.Provider value={{ user, login, register, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth: () => IAuthCnotext = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth必须在 AuthProvider 中使用')
  }
  return context as IAuthCnotext
}
