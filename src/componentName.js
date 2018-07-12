// @flow
import type {ReactComponent} from './typings/index'
import isReactComponent from './isReactComponent'

/**
 * Retrieves the name of a given React component.
 * @param {React.Component} Component A React component.
 * @returns {string} The name of the React component.
 */
export function getComponentName(Component: ReactComponent): string {
  if (!isReactComponent(Component)) return ''

  return Component.displayName || Component.name || 'Component'
}

/**
 * Wraps a retrieved the name of a given React component.
 * @param {React.Component} Component A React component.
 * @returns {string} The wrapped name of the React component.
 */
export function wrapComponentName(
  Component: ReactComponent,
  wrapperName: string,
): string {
  const componentName = getComponentName(Component)
  if (!wrapperName) return componentName

  return `${wrapperName}(${componentName})`
}
