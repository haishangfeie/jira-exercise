import { useState, useEffect } from 'react'
import { List } from './list'
import { SearchPanel } from './search-panel'
import { useMount, useDebounce } from 'src/utils/index'
import { client } from 'src/utils/http'
import styled from '@emotion/styled'

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })

  const debounceParam = useDebounce(param, 1000)

  useEffect(() => {
    client('projects', {
      data: debounceParam,
    })
      .then((data) => {
        setList(data || [])
      })
      .catch(() => {})
  }, [debounceParam])

  useMount(() => {
    client(`users`).then((data) => {
      setUsers(data || null)
    })
  })
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </Container>
  )
}

const Container = styled.div`
  padding: 3.2rem;
`
