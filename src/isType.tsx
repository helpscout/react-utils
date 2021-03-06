import * as React from 'react'
import { ReactComponent } from './typings/index'
import get from 'dash-get'
import isReactComponent from './isReactComponent'
import { isArray } from './utils'

/**
 * Checks to see if a React component is a specific type.
 * @param {React.Component} Component A React component.
 * @param {Array<any> | string} types Types to check against.
 * @returns {boolean} Truthiness.
 */
export const isComponentOneOfType = (
  Component: ReactComponent,
  types: Array<any> | string
): boolean => {
  if (
    !isReactComponent(Component) ||
    (!Array.isArray(types) && typeof types !== 'string')
  )
    return false

  return React.isValidElement(Component) && Component.type && isArray(types)
    ? types.some(o => o === Component.type)
    : get(Component, 'type') === types
}

/**
 * Checks to see if a React component is a "span" DOM type.
 * @param {React.Component} Component A React component.
 * @returns {boolean} Truthiness.
 */
export const isNativeSpanType = (Component: ReactComponent): boolean => {
  const types = ['a', 'b', 'bold', 'em', 'i', 'span', 'strong', 'u']

  return isComponentOneOfType(Component, types)
}

/**
 * Checks to see if a React component is a "block" DOM type.
 * @param {React.Component} Component A React component.
 * @returns {boolean} Truthiness.
 */
export const isNativeBlockType = (Component: ReactComponent): boolean => {
  const types = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'blockquote',
    'header',
    'main',
    'section',
    'aside',
    'figure',
    'div',
  ]

  return isComponentOneOfType(Component, types)
}
