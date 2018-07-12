// @flow
import type {ReactComponent} from './typings/index'
import getComponentName from './getComponentName'

/**
 * Wraps a retrieved the name of a given React component.
 * @param {React.Component} Component A React component.
 * @returns {string} The wrapped name of the React component.
 */
function wrapComponentName(
  Component: ReactComponent,
  wrapperName: string,
): string {
  const componentName = getComponentName(Component)
  if (!wrapperName) return componentName

  return `${wrapperName}(${componentName})`
}

export default wrapComponentName
