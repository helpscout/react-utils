// @flow
import type { ReactComponent } from './typings/index'
import isReactComponent from './isReactComponent'

/**
 * Retrieves the name of a given React component.
 * @param {React.Component} Component A React component.
 * @returns {string} The name of the React component.
 */
function getComponentName(Component: ReactComponent): string {
  if (!isReactComponent(Component)) return ''

  return Component.displayName || Component.name || 'Component'
}

export default getComponentName
