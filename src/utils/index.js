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
