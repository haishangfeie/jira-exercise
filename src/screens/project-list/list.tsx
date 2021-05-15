import { Table } from 'antd'
import dayjs from 'dayjs'
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
        //
        {
          title: '部门',
          dataIndex: 'organization',
        },
        {
          title: '负责人',
          render(value, row) {
            return users.find((user) => user.id === row.personId)?.name || ''
          },
        },
        {
          title: '创建日期',
          dataIndex: 'created',
          render(value, row) {
            console.log(value)
            return value ? dayjs(value).format('YYYY-MM-DD') : '无'
          },
        },
      ]}
      dataSource={list}
      rowKey="id"
    />
  )
}
