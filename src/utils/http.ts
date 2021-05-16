import qs from 'qs'
import { cleanObject } from 'src/utils/index'
import * as auth from 'src/auth-provider'

const apiUrl = process.env.REACT_APP_API_URL

interface IConfig extends RequestInit {
  token?: string
  data?: { [key: string]: unknown }
}

export default function http(
  endpoint: string,
  { data, token, headers, ...initConfig }: IConfig = {}
) {
  let url = `${apiUrl}/${endpoint}`
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
      ...(headers || {}),
    },
    ...initConfig,
  }
  const newData = data ? cleanObject(data) : {}
  const haveData = !!Object.keys(newData)?.length
  config.method = config.method.toUpperCase()
  if (config.method === 'GET') {
    if (haveData) {
      url += `?${qs.stringify(newData)}`
    }
  } else {
    if (haveData) {
      config.body = JSON.stringify(newData)
    }
  }

  return fetch(url, config).then(async (res) => {
    if (res.status === 401) {
      await auth.logout()
      window.location.reload()
      return Promise.reject({ message: '请重新登录' })
    }
    const data = await res.json()
    if (res.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export function client(...[endpoint, cusConfig]: Parameters<typeof http>) {
  const config = { ...(cusConfig || {}) }
  const token = auth.getToken()
  if (token) {
    config.token = token
  }
  return http(endpoint, config)
}
