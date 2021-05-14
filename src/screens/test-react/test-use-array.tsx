import React from 'react'
import { useArray, useMount } from 'src/utils/index'

const TestUseArray = () => {
  const persons: { name: string; age: number }[] = [
    { name: '小明', age: 23 },
    { name: '小花', age: 10 },
  ]
  const { value, add, removeIndex, clear } = useArray(persons)

  return (
    <>
      {value.map((item, index) => (
        <div key={index}>
          {item.name} {item.age}
        </div>
      ))}
      <hr />
      <button
        onClick={() => {
          add({ name: 'JOJO', age: 20 })
        }}
      >
        add JOJO
      </button>
      <button
        onClick={() => {
          removeIndex(0)
        }}
      >
        remove index 0
      </button>
      <button onClick={clear}>clear</button>
    </>
  )
}

export default TestUseArray
