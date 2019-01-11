export function isDefined<T>(value: T | undefined | null): value is T {
  return <T>value !== undefined && <T>value !== null
}

export function typeOf<T>(value: unknown, type: string): value is T {
  return isDefined(value) && typeof value === type
}

export function isArray<T>(value: unknown): value is Array<T> {
  return Array.isArray(value)
}

export function isBool<T>(value: unknown): value is Boolean {
  return typeOf(value, 'boolean')
}

export function isBoolean<T>(value: unknown): value is Boolean {
  return isBool(value)
}

export function isFunction<T>(value: unknown): value is Function {
  return typeOf(value, 'function')
}

export function isNumber<T>(value: unknown): value is Number {
  return typeOf(value, 'number')
}

export function isString<T>(value: unknown): value is String {
  return typeOf(value, 'string')
}

export function isObject<T>(value: unknown): value is any {
  return typeOf(value, 'object') && !isFunction(value) && !isArray(value)
}

// Source
// https://github.com/Shopify/javascript-utilities/blob/master/src/other.ts
export function createUniqueIDFactory(prefix: string = ''): () => string {
  const index = createUniqueIndexFactory(1)

  /* istanbul ignore next */
  return (prefixOverride: string = ''): string => {
    const namespace = prefixOverride || prefix || ''

    return `${namespace}${index()}`
  }
}

export function createUniqueIndexFactory(start: number = 1) {
  let index = typeof start === 'number' ? start : 1
  return (): number => index++
}
