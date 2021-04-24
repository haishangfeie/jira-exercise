import { IUser } from './screens/project-list/list'
const localStorageTokenKey = '__auth_provider_token__'

const apiUrl = process.env.REACT_APP_API_URL

export const getToken = () => window.localStorage.getItem(localStorageTokenKey)

const setToken = ({ user }: { user: IUser }) => {
  window.localStorage.setItem(localStorageTokenKey, user.token || '')
  return user
}

export const login = ({
  username,
  password,
}: {
  username: string
  password: string
}) => {
  return fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then(async (res) => {
    if (res.ok) {
      return setToken(await res.json())
    } else {
      return Promise.reject(new Error('登录失败'))
    }
  })
}

export const register = ({
  username,
  password,
}: {
  username: string
  password: string
}) => {
  return fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then(async (res) => {
    if (res.ok) {
      return setToken(await res.json())
    } else {
      return Promise.reject(new Error('注册失败'))
    }
  })
}

export const logout = async () => {
  window.localStorage.removeItem(localStorageTokenKey)
}
