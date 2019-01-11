import { ReactComponent } from './typings/index'
import isReactComponent from './isReactComponent'
import { isDefined, isString } from './utils'

/**
 * Retrieves a defaultProp value from a React component.
 * @param {React.ComponentClass} Component A React component.
 * @param {string} prop The prop name.
 * @param {any} fallback A fallback prop value.
 * @returns {any} The defaultProp value.
 */
function getComponentDefaultProp(
  Component: ReactComponent,
  prop: string,
  fallback: any = undefined
): any {
  if (!isReactComponent(Component)) return fallback
  if (!isString(prop)) return fallback

  if (
    !isDefined(Component.defaultProps) ||
    !isDefined(Component.defaultProps[prop])
  ) {
    return fallback
  }

  return Component.defaultProps[prop]
}

export default getComponentDefaultProp
