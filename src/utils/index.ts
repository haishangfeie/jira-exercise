import { useCallback, useEffect, useState } from 'react'

export const isTurthy = (val: unknown) => {
  return val === 0 || !!val
}

type TObj = {
  [key: string]: any
}
export const cleanObject = (obj: TObj) => {
  const newObj = { ...obj }
  Object.keys(newObj).forEach((key) => {
    if (!isTurthy(newObj[key])) {
      delete newObj[key]
    }
  })
  return newObj
}

export const useMount = (callback: () => void) => {
  useEffect(callback, [])
}

// const debounce = (fn, delay) => {
//   let timer = null
//   return (...args) => {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       fn(...args)
//       timer = null
//     }, delay)
//   }
// }

export const useDebounce = <V>(param: V, delay: number) => {
  const [debounceParam, setDebounceParam] = useState(param)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceParam(param)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [param, delay])

  return debounceParam
}

// export const useDebounce = (param, delay) => {
//   const [debounceParam, setDebounceParam] = useState(param);

//   const debounceSetBounceParam = useCallback(
//     debounce((newParam) => {
//       setDebounceParam(newParam);
//     }, delay),
//     [delay]
//   );

//   useEffect(() => {
//     debounceSetBounceParam(param);
//   }, [debounceSetBounceParam, param]);

//   return debounceParam;
// };

// let timer = null
// export const useDebounce = (param, delay) => {
//   const [debounceParam, setDebounceParam] = useState(param)
//   useEffect(() => {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       setDebounceParam(param)
//       timer = null
//     }, delay)
//   }, [param, delay])

//   return debounceParam
// }

export const useArray = <P>(param: P[]) => {
  const [value, setValue] = useState(param)

  const removeIndex = (index: number) => {
    const newVal = [...value]
    newVal.splice(index, 1)
    setValue([...newVal])
  }
  const clear = () => {
    setValue([])
  }
  const add = (item: P) => {
    setValue([...value, item])
  }
  return {
    value,
    setValue,
    removeIndex,
    clear,
    add,
  }
}
