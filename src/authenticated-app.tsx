import { ProjectListScreen } from './screens/project-list/index'
import { useAuth } from 'src/context/auth-context'
import { Button } from 'antd'
import { Row } from './components/lib'
const AuthenticatedScreen = () => {
  const { logout } = useAuth()
  return (
    <div>
      <Row justifyContent="space-between">
        <Row gap={10}>
          <div>logo</div>
          <div>jira</div>
          <div>首页</div>
        </Row>
        <Button onClick={logout}>登出</Button>
      </Row>
      <ProjectListScreen />
    </div>
  )
}

export default AuthenticatedScreen
