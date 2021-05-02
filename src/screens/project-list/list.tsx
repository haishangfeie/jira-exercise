import { Table } from 'antd'
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
  token: string
}

interface IListProps {
  list: IProject[]
  users: IUser[]
}

export const List = ({ list, users }: IListProps) => {
  return (
    <Table
      columns={[
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '负责人',
          render(value, row) {
            return users.find((user) => user.id === row.personId)?.name || ''
          },
        },
      ]}
      dataSource={list}
      rowKey="id"
    />
  )
}
