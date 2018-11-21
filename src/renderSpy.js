import React from 'react'
import hoistNonReactStatics from './hoistNonReactStatics'
import getShallowDiffs from './getShallowDiffs'
import getComponentName from './getComponentName'
import wrapComponentName from './wrapComponentName'

const defaultOptions = {}

function renderSpy(options = defaultOptions) {
  return function(WrappedComponent) {
    const { id } = options
    const displayName = id || getComponentName(WrappedComponent)

    class ReactRenderSpy extends React.Component {
      componentDidMount() {
        console.group(`${displayName} Mounted`)
        console.groupEnd()
      }

      componentDidUpdate(prevProps) {
        const changes = getShallowDiffs(prevProps, this.props)
        const { diffs, previous, next } = changes

        if (!diffs.length) return

        console.group(`${displayName} Rendered`)
        console.log('Changes', diffs)
        console.log('Previous', previous)
        console.log('Next', next)
        console.groupEnd()
      }

      componentWillUnmount() {
        console.group(`${displayName} Unmounted`)
        console.groupEnd()
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    }

    const EnhancedComponent = hoistNonReactStatics(
      ReactRenderSpy,
      WrappedComponent
    )

    EnhancedComponent.displayName = wrapComponentName(
      WrappedComponent,
      'withRenderSpy'
    )

    return EnhancedComponent
  }
}

export default renderSpy
