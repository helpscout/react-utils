import React from 'react'
import wrapComponentName from '../wrapComponentName'

describe('wrapComponentName', () => {
  test('Can wrap a component displayName (SFC)', () => {
    const Compo = () => <div />
    Compo.displayName = 'CustomName'

    expect(wrapComponentName(Compo, 'withThing')).toBe('withThing(CustomName)')
  })

  test('Can wrap a component displayName (Class)', () => {
    class Compo extends React.Component {}
    Compo.displayName = 'CustomName'

    expect(wrapComponentName(Compo, 'withThing')).toBe('withThing(CustomName)')
  })

  test('Returns empty string if invalid component', () => {
    const o = []

    expect(wrapComponentName(o)).toBe('')
  })
})
