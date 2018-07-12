// @flow
// Source:
// https://github.com/acdlite/recompose/blob/master/src/packages/recompose/compose.js

/**
 * Composing a React component with other functions/enhancements.
 * @param {any} funcs Callback functions.
 */
const compose = (...funcs: any) =>
  funcs.reduce((a, b) => (...args) => a(b(...args)), arg => arg)

export default compose
