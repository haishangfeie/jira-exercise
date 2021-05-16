import { Button, Card, Divider } from 'antd'
import { useState } from 'react'
import LoginScreen from './login'
import RegisterScreen from './register'
import styled from '@emotion/styled'
import logoImg from 'src/assets/logo.svg'
import leftImg from 'src/assets/left.svg'
import rightImg from 'src/assets/right.svg'

const UnauthenticatedScreen = () => {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <Container>
      <Background />
      <Header />
      <ShadowCard>
        <Title>{isRegister ? '请注册' : '请登录'}</Title>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <Divider />
        <Button
          type="link"
          onClick={() => {
            setIsRegister((flag) => !flag)
          }}
        >
          切换为{isRegister ? '已经有账号了？直接登录' : '没有账号？注册新账号'}
        </Button>
      </ShadowCard>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 60rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`

const Header = styled.header`
  background: url(${logoImg}) no-repeat center;
  padding: 4rem 0;
  background-size: 8rem;
  width: 100%;
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: left bottom, right bottom;
  background-size: calc((100vw - 40rem) / 2 - 4rem),
    calc((100vw - 40rem) / 2 - 4rem);
  background-image: url(${leftImg}), url(${rightImg});
`

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`

export const LongButton = styled(Button)`
  width: 100%;
`

export default UnauthenticatedScreen
