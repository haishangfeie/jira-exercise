/**
 * 这个页面本身和项目是无关的，不过既然这个项目本身的目的就是为了学习，所以我把学习Utils Types的内容也保留了
 */
interface Person {
  name: string
  age: number
}

type Partial2<T> = {
  [K in keyof T]?: T[K]
}

type Person2 = Partial2<Person>

type Pick2<T, K extends keyof T> = {
  [P in K]: T[K]
}

type PersonOnlyName = Pick2<Person, 'name'>

type Exclude2<T, U> = T extends U ? never : T

type PersonKeys = keyof Person

type Age = Exclude2<PersonKeys, 'name2'>
// type Age = Exclude<PersonKeys, 'name2'>

type Omit2<T, P extends keyof any> = Pick2<T, Exclude2<keyof T, P>>

type moshengren = Omit2<Person, 'age'>
