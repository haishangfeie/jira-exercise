import React, { useState, useEffect } from 'react'
import { List } from './list.jsx'
import { SearchPanel } from './search-panel.jsx'
import { cleanObject } from 'utils/index'
import qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectList = () => {
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`)
      .then(async (res) => {
        if (res.ok) {
          try {
            setList((await res.json()) || [])
          } catch (error) {}
        }
      })
      .catch(() => {})
  }, [param])

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  }, [])
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}
