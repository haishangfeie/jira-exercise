import { Table } from 'antd'
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
          sorter(a, b) {
            return a.name.localeCompare(b.name)
          },
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
