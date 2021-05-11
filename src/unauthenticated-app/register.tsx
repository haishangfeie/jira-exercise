import React from 'react'
import { useAuth } from 'context/auth-context'
import { Form, Input } from 'antd'
import { LongButton } from 'unauthenticated-app'

const RegisterScreen = () => {
  const authContext = useAuth()
  const onsubmit = (values: { username: string; password: string }) => {
    if (!values.username || !values.password) {
      return
    }
    authContext
      .register(values)
      .then(() => {
        console.log('注册成功')
      })
      .catch(() => {
        console.log('注册失败')
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
        <LongButton htmlType="submit" type="primary">
          注册
        </LongButton>
      </Form.Item>
    </Form>
  )
}

export default RegisterScreen
