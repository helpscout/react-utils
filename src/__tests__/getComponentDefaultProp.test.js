import React from 'react'
import getComponentDefaultProp from '../getComponentDefaultProp'

test('Returns fallback (undefined) if invalid arguments', () => {
  expect(getComponentDefaultProp()).toBe(undefined)
  expect(getComponentDefaultProp(true)).toBe(undefined)
  expect(getComponentDefaultProp(false)).toBe(undefined)
  expect(getComponentDefaultProp('component')).toBe(undefined)
  expect(getComponentDefaultProp(['component'])).toBe(undefined)
  expect(getComponentDefaultProp({a: 1})).toBe(undefined)
})

test('Returns fallback (undefined) if defaultProp does not exist', () => {
  expect(getComponentDefaultProp({a: 1}, 'a')).toBe(undefined)
  expect(getComponentDefaultProp({props: 1}, 'a')).toBe(undefined)
})

test('Returns defaultProp if exists', () => {
  const o = () => <div />
  o.defaultProps = {
    a: 1,
  }
  expect(getComponentDefaultProp(o, 'a')).toBe(1)
})

test('Returns fallback if prop (arg) is invalid', () => {
  const o = () => <div />
  o.defaultProps = {
    a: 1,
  }
  expect(getComponentDefaultProp(o, 1, 'b')).toBe('b')
})

test('Can customize fallback', () => {
  const o = () => <div />
  o.defaultProps = {
    a: 1,
  }
  const fallback = 'fallback'

  expect(getComponentDefaultProp(o, 'nope', fallback)).toBe(fallback)
  expect(getComponentDefaultProp(true, 'nope', fallback)).toBe(fallback)
})
