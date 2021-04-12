import React, { useState } from 'react'

export const SearchPanel = ({ users, param, setParam }) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onInput={(e) => {
            setParam({
              ...param,
              name: e.target.value,
            })
          }}
        />
        <select
          name={param.personId}
          onChange={(e) => {
            setParam({
              ...param,
              personId: e.target.value,
            })
          }}
        >
          <option value="">负责人</option>
          {users.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button>搜索</button>
      </div>
    </form>
  )
}
