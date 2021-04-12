import React, { useState, useEffect } from 'react'
import { List } from './list.jsx'
import { SearchPanel } from './search-panel.jsx'
import { cleanObject, useMount, useDebounce } from 'utils/index'
import qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectList = () => {
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })

  const debounceParam = useDebounce(param, 1000)

  useEffect(() => {
    const query = qs.stringify(cleanObject(debounceParam))
    fetch(
      `${apiUrl}/projects${query ? '?' : ''}${qs.stringify(
        cleanObject(debounceParam)
      )}`
    )
      .then(async (res) => {
        if (res.ok) {
          try {
            setList((await res.json()) || [])
          } catch (error) {}
        }
      })
      .catch(() => {})
  }, [debounceParam])

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  })
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}
