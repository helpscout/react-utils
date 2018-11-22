// @flow
export const isFunction = (o: ?Function): boolean =>
  o && typeof o === 'function'
export const isObject = (o: ?Object): boolean => o && typeof o === 'object'
export const isString = (o: ?string): boolean => o && typeof o === 'string'

// Source
// https://github.com/Shopify/javascript-utilities/blob/master/src/other.ts
export function createUniqueIDFactory(prefix: ?string = '') {
  const index = createUniqueIndexFactory(1)
  return (prefixOverride: ?string): string => {
    const namespace = prefixOverride || prefix || ''

    return `${namespace}${index()}`
  }
}

export function createUniqueIndexFactory(start: ?number = 1) {
  let index = typeof start === 'number' ? start : 1
  return (): number => index++
}
