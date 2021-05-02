import React from 'react'
import { useAuth } from 'context/auth-context'
import { Button, Form, Input } from 'antd'

const LoginScreen = () => {
  const authContext = useAuth()
  const onsubmit = (values: { username: string; password: string }) => {
    if (!values.username || !values.password) {
      return
    }
    authContext
      .login(values)
      .then(() => {
        console.log('登录成功')
      })
      .catch(() => {
        console.log('登录失败')
      })
  }
  return (
    <Form onFinish={onsubmit}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="用户名" type="text" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input placeholder="密码" type="password" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginScreen
