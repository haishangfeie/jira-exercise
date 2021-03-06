import { useAuth } from 'src/context/auth-context'
import { Form, Input } from 'antd'
import { LongButton } from 'src/unauthenticated-app'

const LoginScreen = () => {
  const authContext = useAuth()
  const onsubmit = (values: { username: string; password: string }) => {
    if (!values.username || !values.password) {
      return
    }
    authContext.login(values).catch(() => {
      console.log('登录失败')
    })
  }
  return (
    <Form onFinish={onsubmit}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="用户名" type="text" autoComplete="on" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input placeholder="密码" type="password" autoComplete="on" />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType="submit" type="primary">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  )
}

export default LoginScreen
