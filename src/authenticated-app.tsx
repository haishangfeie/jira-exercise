import { ProjectListScreen } from './screens/project-list/index'
import { useAuth } from 'src/context/auth-context'
import { Button } from 'antd'
const AuthenticatedScreen = () => {
  const { logout } = useAuth()
  return (
    <div>
      <Button onClick={logout}>登出</Button>
      <ProjectListScreen />
    </div>
  )
}

export default AuthenticatedScreen
