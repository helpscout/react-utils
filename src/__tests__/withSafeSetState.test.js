import React from 'react'
import withSafeSetState from '../withSafeSetState'
import { mount } from 'enzyme'

describe('withSafeSetState', () => {
  test('Statics are hoisted', () => {
    const spy = jest.fn()

    class Sample extends React.Component {
      static SomeStatic = true
      componentDidMount() {
        spy()
      }

      render() {
        return null
      }
    }

    const EnhancedSample = withSafeSetState()(Sample)

    expect(EnhancedSample.SomeStatic).toBe(true)
  })

  test('componentDidMount still works as expected', () => {
    const spy = jest.fn()

    class Sample extends React.Component {
      componentDidMount() {
        spy()
      }

      render() {
        return null
      }
    }

    const EnhancedSample = withSafeSetState()(Sample)
    const wrapper = mount(<EnhancedSample />)
    wrapper.unmount()

    expect(spy).toHaveBeenCalled()
  })

  test('componentWillUnmount still works as expected', () => {
    const spy = jest.fn()

    class Sample extends React.Component {
      componentWillUnmount() {
        spy()
      }

      render() {
        return null
      }
    }
    const EnhancedSample = withSafeSetState()(Sample)
    const wrapper = mount(<EnhancedSample />)
    wrapper.unmount()

    expect(spy).toHaveBeenCalled()
  })

  test('setState still works as expected', () => {
    class Sample extends React.Component {
      state = {
        active: false,
      }

      componentDidMount() {
        this.setState({
          active: true,
        })
      }

      render() {
        return null
      }
    }

    const EnhancedSample = withSafeSetState()(Sample)
    const wrapper = mount(<EnhancedSample />)
    const Compo = wrapper.find('Sample').instance()

    expect(Compo.state.active).toBe(true)

    Compo.setState({ active: false })
    expect(Compo.state.active).toBe(false)
  })

  test('Can trigger setState from prop update', () => {
    class Sample extends React.Component {
      state = {
        active: false,
      }

      componentDidUpdate() {
        if (!this.state.active) {
          this.setState({
            active: true,
          })
        }
      }

      render() {
        return null
      }
    }

    const EnhancedSample = withSafeSetState()(Sample)
    const wrapper = mount(<EnhancedSample />)
    const Compo = wrapper.find('Sample').instance()

    expect(Compo.state.active).toBe(false)

    wrapper.setProps({ update: true })

    expect(Compo.state.active).toBe(true)
  })

  test('Cannot setState if unmounted', () => {
    class Sample extends React.Component {
      state = {
        active: false,
      }

      componentDidMount() {
        this.setState({
          active: true,
        })
      }

      componentWillUnmount() {
        this.setState({
          active: 'doesNotMatter',
        })
      }

      render() {
        return null
      }
    }
    const EnhancedSample = withSafeSetState()(Sample)
    const wrapper = mount(<EnhancedSample />)
    const Compo = wrapper.find('Sample').instance()

    wrapper.unmount()

    expect(Compo.state.active).toBe(true)
  })

  test('Can internally check if a component is mounted', () => {
    const spy = jest.fn()
    class Sample extends React.Component {
      someSetStateMethod(callback) {
        this.setState(
          {
            gogo: true,
          },
          callback
        )
      }
      render() {
        return null
      }
    }
    const EnhancedSample = withSafeSetState()(Sample)
    const wrapper = mount(<EnhancedSample />)
    const Compo = wrapper.find('Sample').instance()

    expect(Compo.isComponentMounted()).toBe(true)
    Compo.someSetStateMethod(spy)
    expect(spy).toHaveBeenCalledTimes(1)

    wrapper.unmount()

    expect(Compo.isComponentMounted()).toBe(false)

    Compo.someSetStateMethod(spy)
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
