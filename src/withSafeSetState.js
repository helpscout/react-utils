import React from 'react'
import hoistNonReactStatic from './hoistNonReactStatics'

/**
 * Enhances a component to ensure that setState can only be called if the
 * component is mounted.
 */
function withSafeSetState() {
  return function enhanceWithSafeSetState(WrappedComponent) {
    let isMounted = false
    const {
      componentDidMount,
      componentWillUnmount,
      setState,
    } = WrappedComponent.prototype

    WrappedComponent.prototype.componentDidMount = function(...args) {
      isMounted = true
      if (componentDidMount) {
        componentDidMount.bind(this)(...args)
      }
    }

    WrappedComponent.prototype.componentWillUnmount = function(...args) {
      isMounted = false
      if (componentWillUnmount) {
        componentWillUnmount.bind(this)(...args)
      }
    }

    WrappedComponent.prototype.setState = function(...args) {
      if (isMounted && setState) {
        setState.bind(this)(...args)
      }
    }

    WrappedComponent.prototype.isComponentMounted = () => isMounted

    const WithSafeSetState = props => {
      return <WrappedComponent {...props} />
    }

    return hoistNonReactStatic(WithSafeSetState, WrappedComponent)
  }
}

export default withSafeSetState
