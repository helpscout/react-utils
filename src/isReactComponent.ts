import { isReact15Up } from './reactVersion'
import { isFunction, isObject } from './utils'

/**
 * Determines if the object is a React component.
 *
 * @param   {React.Component} Component A React.Component.
 * @returns {boolean} Truthiness.
 */
function isReactComponent(Component: any): boolean {
  // Stateless functional components
  if (isFunction(Component)) {
    return true
  } else if (isObject(Component)) {
    return (
      isReact15Up(Component) ||
      Component.hasOwnProperty('$$typeof') ||
      Component.hasOwnProperty('ref')
    )
  }
  return false
}

export default isReactComponent
