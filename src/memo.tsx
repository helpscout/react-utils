import * as React from 'react'
import { ComponentType } from 'react'
import hoistNonReactStatics from './hoistNonReactStatics'
import shallowEqual, { CompareFunction } from './shallowEqual'
import { isDefined, isFunction, noop } from './utils'

const defaultLifeCycleHooks = {
  componentDidUpdate: noop,
}

// Enhancement + polyfill for React.memo (v16.6)
// https://reactjs.org/docs/react-api.html#reactmemo
export function memo<T>(
  Component: ComponentType<T>,
  areEqual: CompareFunction = shallowEqual,
  lifecycleHooks: any = defaultLifeCycleHooks,
): ComponentType<T> {
  // Cache the initial props + component
  let prevProps = {}
  let memoizedComponent: JSX.Element | undefined

  // Merge/extract options
  const mergedLifecycleHooks = { ...defaultLifeCycleHooks, ...lifecycleHooks }
  const { componentDidUpdate } = mergedLifecycleHooks
  const shouldComponentUpdate = isFunction(areEqual) ? areEqual : shallowEqual

  const wrappedComponent = nextProps => {
    // shallowEqual test for prop changes
    if (
      isDefined(memoizedComponent) &&
      shouldComponentUpdate(prevProps, nextProps)
    ) {
      return memoizedComponent
    }

    // Update the prop cache
    prevProps = nextProps
    // Update the memozied component
    memoizedComponent = <Component {...nextProps} />

    // Provide the componentDidUpdate hook
    componentDidUpdate(prevProps, nextProps)

    return memoizedComponent
  }

  return hoistNonReactStatics(wrappedComponent, Component)
}

export default memo
