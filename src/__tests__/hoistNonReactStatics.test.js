import React from 'react'
import hoistNonReactStatics from '../hoistNonReactStatics'

describe('hoistNonReactStatics', () => {
  test('Correctly hoists non-react statics from a React component', () => {
    class Child extends React.Component {
      static hello = 'Hello'
      render () {
        return null
      }
    }

    class Wrapped extends React.Component {
      render () {
        return null
      }
    }


    const EnhancedChild = hoistNonReactStatics(Wrapped, Child)

    expect(EnhancedChild.hello).toBe('Hello')
  })

  test('Can hoist functions', () => {
    const spy = jest.fn()

    class Child extends React.Component {
      static hello = spy
      render () {
        return null
      }
    }

    class Wrapped extends React.Component {
      render () {
        return null
      }
    }


    const EnhancedChild = hoistNonReactStatics(Wrapped, Child)
    EnhancedChild.hello()

    expect(spy).toHaveBeenCalled()
  })
})