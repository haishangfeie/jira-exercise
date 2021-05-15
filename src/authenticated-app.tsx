import { ProjectListScreen } from './screens/project-list/index'
import { useAuth } from 'src/context/auth-context'
import { Button, Dropdown, Menu } from 'antd'
import { Row } from './components/lib'
import { ReactComponent as SoftwareLogo } from 'src/assets/software-logo.svg'
import styled from '@emotion/styled'

const AuthenticatedScreen = () => {
  const { logout, user } = useAuth()
  return (
    <div>
      <Header justifyContent="space-between">
        <Row gap={10}>
          <SoftwareLogo width="18rem" color="rgb(38,132,255)" />
          <div>jira</div>
          <div>首页</div>
        </Row>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="logout">
                <Button onClick={logout}>登出</Button>
              </Menu.Item>
            </Menu>
          }
        >
          {/* 防止点击导致刷新 */}
          <a onClick={(e) => e.preventDefault()}>Hi，{user?.name}</a>
        </Dropdown>
      </Header>
      <ProjectListScreen />
    </div>
  )
}

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`

export default AuthenticatedScreen
