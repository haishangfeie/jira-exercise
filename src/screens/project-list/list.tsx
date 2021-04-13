import React from 'react'

interface IProject {
  id: number
  name: string
  personId: number
  organization: string
  created: number
}

export interface IUser {
  id: number
  name: string
}

interface IListProps {
  list: IProject[]
  users: IUser[]
}

export const List = ({ list, users }: IListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              {users.find((user) => user.id === item.personId)?.name || ''}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
