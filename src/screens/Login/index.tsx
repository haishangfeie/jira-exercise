import React, { FormEvent } from 'react'
import { useAuth } from 'context/auth-context'

const LoginScreen = () => {
  const authContext = useAuth()
  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    if (!username || !password) {
      return
    }
    authContext
      .login({
        username,
        password,
      })
      .then(() => {
        console.log('登录成功')
      })
  }
  return (
    <form onSubmit={onsubmit}>
      {authContext.user ? (
        <>
          <div>登录成功:</div>
          <div>用户名：{authContext.user.name}</div>
          <div>token：{authContext.user.token}</div>
        </>
      ) : null}
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  )
}

export default LoginScreen
