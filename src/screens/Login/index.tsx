import React, { FormEvent } from 'react'

const apiUrl = process.env.REACT_APP_API_URL

const LoginScreen = () => {
  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    if (!username || !password) {
      return
    }
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log('登录成功')
        } else {
          console.log('登录失败')
        }
      })
      .catch(() => {
        console.log('登录失败')
      })
  }
  return (
    <form onSubmit={onsubmit}>
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
