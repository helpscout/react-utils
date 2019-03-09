export type CompareFunction = (
  prev: { [key: string]: any },
  next: { [key: string]: any },
) => boolean

export const shallowEqual = (
  prev: { [key: string]: any },
  next: { [key: string]: any },
): boolean => {
  for (let key in next) {
    if (next[key] !== prev[key]) return false
  }

  return true
}

export default shallowEqual
