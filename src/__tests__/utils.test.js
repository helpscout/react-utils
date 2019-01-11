import {
  isArray,
  isBool,
  isBoolean,
  isFunction,
  isObject,
  isNumber,
  isString,
  createUniqueIDFactory,
  createUniqueIndexFactory,
} from '../utils'

describe('isArray', () => {
  test('Returns false for non-arrays', () => {
    expect(isArray()).toBe(false)
    expect(isArray(0)).toBe(false)
    expect(isArray(1)).toBe(false)
    expect(isArray({})).toBe(false)
  })

  test('Returns true for arrays', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
  })
})

describe('isBool', () => {
  test('Returns false for non-booleans', () => {
    expect(isBool()).toBe(false)
    expect(isBool(0)).toBe(false)
    expect(isBool(1)).toBe(false)
    expect(isBool({})).toBe(false)
  })

  test('Returns true for booleans', () => {
    expect(isBool(true)).toBe(true)
    expect(isBool(false)).toBe(true)
  })
})

describe('isBoolean', () => {
  test('Returns false for non-booleans', () => {
    expect(isBoolean()).toBe(false)
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean(1)).toBe(false)
    expect(isBoolean({})).toBe(false)
  })

  test('Returns true for booleans', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })
})

describe('isFunction', () => {
  test('Returns false for non-functions', () => {
    expect(isFunction()).toBe(false)
    expect(isFunction(0)).toBe(false)
    expect(isFunction(1)).toBe(false)
    expect(isFunction({})).toBe(false)
    expect(isFunction([])).toBe(false)
  })

  test('Returns true for functions', () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(class TestFunction {})).toBe(true)
  })
})

describe('isObject', () => {
  test('Returns false for non-objects', () => {
    expect(isObject()).toBe(false)
    expect(isObject(0)).toBe(false)
    expect(isObject(1)).toBe(false)
    expect(isObject(() => {})).toBe(false)
    expect(isObject([])).toBe(false)
    expect(isObject(class TestFunction {})).toBe(false)
  })

  test('Returns true for objects', () => {
    expect(isObject({})).toBe(true)
  })
})

describe('isNumber', () => {
  test('Returns false for non-numbers', () => {
    expect(isNumber()).toBe(false)
    expect(isNumber('0')).toBe(false)
    expect(isNumber('1')).toBe(false)
    expect(isNumber(() => {})).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber(class TestFunction {})).toBe(false)
  })

  test('Returns true for numbers', () => {
    expect(isNumber(0)).toBe(true)
    expect(isNumber(1)).toBe(true)
    expect(isNumber(100)).toBe(true)
  })
})

describe('isString', () => {
  test('Returns false for non-strings', () => {
    expect(isString()).toBe(false)
    expect(isString(0)).toBe(false)
    expect(isString(1)).toBe(false)
    expect(isString([])).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(/g/g)).toBe(false)
  })

  test('Returns true for strings', () => {
    expect(isString('')).toBe(true)
    expect(isString('word')).toBe(true)
    expect(isString('   word')).toBe(true)
    expect(isString('   word word2 ')).toBe(true)
  })
})

describe('createUniqueIDFactory', () => {
  test('Generates an numerical ID (string), without arguments', () => {
    const uid = createUniqueIDFactory()

    expect(uid()).toBe('1')
  })

  test('Generates an ID num with prefix', () => {
    const uid = createUniqueIDFactory('prefix')

    expect(uid()).toBe('prefix1')
  })

  test('Auto-increments ID num on every call', () => {
    const uid = createUniqueIDFactory('prefix')
    uid() // 1
    uid() // 2
    uid() // 3
    uid() // 4
    // Next call should be 5
    expect(uid()).toBe('prefix5')
  })

  test('Returns just the number, as a string, if no prefix', () => {
    const uid = createUniqueIDFactory()
    uid() // 1
    uid() // 2
    uid() // 3
    uid() // 4
    // Next call should be 5
    expect(uid(undefined)).toBe('5')
  })
})

describe('createUniqueIndexFactory', () => {
  test('Defaults to 1 if argument is invalid', () => {
    const ui = createUniqueIndexFactory('index')

    expect(ui()).toBe(1)
  })

  test('Generates an numerical ID (number), without arguments', () => {
    const ui = createUniqueIndexFactory()

    expect(ui()).toBe(1)
  })

  test('Auto-increments ID num on every call', () => {
    const ui = createUniqueIndexFactory()
    ui() // 1
    ui() // 2
    ui() // 3
    ui() // 4
    ui() // 5

    expect(ui()).toBe(6)
  })

  test('Generates an index based on a start number', () => {
    const ui = createUniqueIndexFactory(100)

    expect(ui()).toBe(100)
  })

  test('Auto-increments ID based on a start number', () => {
    const ui = createUniqueIndexFactory(100)
    ui() // 100
    ui() // 101
    ui() // 102
    ui() // 103
    ui() // 104
    ui() // 105

    expect(ui()).toBe(106)
  })
})
