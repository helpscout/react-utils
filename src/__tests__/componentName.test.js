import React from 'react'
import {getComponentName, wrapComponentName} from '../componentName'

describe('getComponentName', () => {
  test('Defaults to Component if there is no name', () => {
    const o = React.createElement('a')

    expect(getComponentName(o)).toBe('Component')
  })

  test('Can get a component displayName (SFC)', () => {
    const Compo = () => <div />
    Compo.displayName = 'CustomName'

    expect(getComponentName(Compo)).toBe('CustomName')
  })

  test('Can get a component displayName (Class)', () => {
    class Compo extends React.Component {}
    Compo.displayName = 'CustomName'

    expect(getComponentName(Compo)).toBe('CustomName')
  })

  test('Returns empty string if invalid component', () => {
    const o = []

    expect(getComponentName(o)).toBe('')
  })
})

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
