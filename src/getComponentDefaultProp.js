// @flow
import type {ReactComponent} from './typings/index'
import isReactComponent from './isReactComponent'
import {isString} from './utils'

/**
 * Retrieves a defaultProp value from a React component.
 * @param {React.Component} Component A React component.
 * @param {string} prop The prop name.
 * @param {any} fallback A fallback prop value.
 * @returns {any} The defaultProp value.
 */
function getComponentDefaultProp(
  Component: ReactComponent,
  prop: string,
  fallback: ?any = undefined,
): any {
  if (!isReactComponent(Component)) return fallback
  if (!isString(prop)) return fallback

  return Component.defaultProps && Component.defaultProps[prop] !== undefined
    ? Component.defaultProps[prop]
    : fallback
}

export default getComponentDefaultProp
