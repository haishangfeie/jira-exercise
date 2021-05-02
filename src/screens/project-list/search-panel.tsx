import React from 'react'
import { IUser } from './list'
import { Input, Select } from 'antd'

interface ISearchPanelProp {
  users: IUser[]
  param: {
    name: string
    personId: string
  }
  setParam: (prop: ISearchPanelProp['param']) => void
}

export const SearchPanel = ({ users, param, setParam }: ISearchPanelProp) => {
  return (
    <div>
      <Input
        type="text"
        value={param.name}
        onInput={(e) => {
          setParam({
            ...param,
            name: (e.target as HTMLInputElement).value,
          })
        }}
      />
      <Select
        defaultValue=""
        onChange={(value) => {
          setParam({
            ...param,
            personId: value,
          })
        }}
      >
        <Select.Option value="">负责人</Select.Option>
        {users.map((item) => (
          <Select.Option key={item.id} value={item.id}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
    </div>
  )
}
