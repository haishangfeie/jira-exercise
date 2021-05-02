import React, { useState, useEffect } from 'react'
import { List } from './list'
import { SearchPanel } from './search-panel'
import { useMount, useDebounce } from 'utils/index'
import { client } from 'utils/http'

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
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}
