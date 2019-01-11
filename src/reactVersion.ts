import get from 'dash-get'
import { ReactComponent } from './typings/index'
import { isObject } from './utils'

/**
 * Checks to see if React is v15, by checking the provided component.
 * @param {React.Component} Component The React component.
 * @returns {boolean}
 */
export function isReact15(Component: ReactComponent): boolean {
  return isObject(Component) && get(Component, '_reactInternalInstance')
}

/**
 * Checks to see if React is v16, by checking the provided component.
 * @param {React.Component} Component The React component.
 * @returns {boolean}
 */
export function isReact16(Component: ReactComponent): boolean {
  return isObject(Component) && get(Component, '_reactInternalFiber')
}

/**
 * Checks to see if React is v15 and up, by checking the provided component.
 * @param {React.Component} Component The React component.
 * @returns {boolean}
 */
export function isReact15Up(Component: ReactComponent): boolean {
  return isReact15(Component) || isReact16(Component)
}
