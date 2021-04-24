import { useState } from 'react'
import LoginScreen from './login'
import RegisterScreen from './register'

const UnauthenticatedScreen = () => {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <div>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <button
        onClick={() => {
          setIsRegister((flag) => !flag)
        }}
      >
        切换为{isRegister ? '登录' : '注册'}
      </button>
    </div>
  )
}

export default UnauthenticatedScreen
