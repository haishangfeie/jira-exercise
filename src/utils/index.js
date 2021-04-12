import { useCallback, useEffect, useState } from "react";

export const isTurthy = (val) => {
  return val === 0 || !!val;
};
export const cleanObject = (obj) => {
  const newObj = { ...obj };
  Object.keys(newObj).forEach((key) => {
    if (!isTurthy(newObj[key])) {
      delete newObj[key];
    }
  });
  return newObj;
};

export const useMount = (callback) => {
  useEffect(callback, []);
};

const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
};

export const useDebounce = (param, delay) => {
  const [debounceParam, setDebounceParam] = useState(param);

  const debounceSetBounceParam = useCallback(
    debounce((newParam) => {
      setDebounceParam(newParam);
    }, delay),
    [delay]
  );

  useEffect(() => {
    debounceSetBounceParam(param);
  }, [debounceSetBounceParam, param]);

  return debounceParam;
};

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
