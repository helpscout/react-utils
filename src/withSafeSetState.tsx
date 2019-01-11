import * as React from 'react'
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

    WrappedComponent.prototype.componentDidMount = function() {
      isMounted = true
      if (componentDidMount) {
        componentDidMount.apply(this, arguments)
      }
    }

    WrappedComponent.prototype.componentWillUnmount = function() {
      isMounted = false
      if (componentWillUnmount) {
        componentWillUnmount.apply(this, arguments)
      }
    }

    WrappedComponent.prototype.setState = function() {
      if (isMounted && setState) {
        setState.apply(this, arguments)
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
