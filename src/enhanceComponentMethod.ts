import { isFunction } from './utils'

type Callback = (args?: any) => void

/**
 * Reliably enhances a React component method. An example of when this might
 * be used would be within a React.Children map.
 *
 * @param {any} child The React.Children child.
 * @param {string} method The name of the method to enhance.
 * @param {function} callback The enhanced callback function.
 */
const enhanceComponentMethod = (child: any, method: string) => (
  callback?: Callback
) => (...args: any) => {
  /* istanbul ignore next */
  // Super fail-safe checks.
  if (!child || !method) return
  /* istanbul ignore next */
  // Super fail-safe checks.
  if (!child.props || !child.props[method]) return

  if (isFunction(callback)) {
    callback(...args)
  }

  return child.props[method](...args)
}

export default enhanceComponentMethod
